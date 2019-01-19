import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { GuestSearchQueryModel } from '../data/guest-search-query-model';
import { queryRefresh } from '@angular/core/src/render3/query';
import { GuestResponseModel } from '../data/guest-response-model';
import { RsvpStages } from '../data/constants/rsvp-stages.enum';
import { Type } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  guestQuery: GuestSearchQueryModel = {
    LastName: '',
    ZipCode: ''
  };

  possibleMatches: GuestResponseModel[] = null;
  matchedResult: GuestResponseModel = null;
  guestValidationMessage: String = null;
  guestSearchMessage: String = null;

  rsvpStages: any = RsvpStages;
  currentStage: RsvpStages = RsvpStages.Search;

  constructor(
    private guestService: GuestService
  ) { }

  ngOnInit() {
  }

  private validateGuestSearch(query: GuestSearchQueryModel): Boolean {
    this.guestSearchMessage = null;

    if (query.ZipCode === '' && query.LastName === '') {
      this.guestSearchMessage = 'Please enter a last name, or a last name & zip code';
      return false;
    }

    if (query.ZipCode !== '' && query.LastName === '') {
      this.guestSearchMessage = 'Zip code requres last name in order to locate';
      return false;
    }

    return true;
  }

  searchForInvitation(query: GuestSearchQueryModel) {

    if (!this.validateGuestSearch(query)) {
      return;
    }

    this.guestService.searchForGuests(query)
      .subscribe(matches => {
        this.possibleMatches = matches;
        if (matches.length === 0) {
          this.guestSearchMessage = 'Could not find any matches. Please try another query.';
          this.possibleMatches = null;
          return;
        }

        this.currentStage = RsvpStages.Select;

        if (matches.length === 1) {
          this.setMatchedResult(matches[0]);
        }
      });
  }

  clearSearchQuery() {
    this.guestQuery = new GuestSearchQueryModel();
  }

  clearSearchResults() {
    this.possibleMatches = null;
    this.currentStage = RsvpStages.Search;
  }

  setMatchedResult(match: GuestResponseModel) {
    this.clearSearchQuery();
    this.clearSearchResults();
    this.matchedResult = match;

    if (match.confirmedGuests !== null) {
      this.showCurrentConfirmationStatus(match);
    } else {
      this.showResponseEdit(match);
    }
  }

  showCurrentConfirmationStatus(match: GuestResponseModel) {
    this.matchedResult = match;
    this.currentStage = RsvpStages.ShowResponse;
  }

  showResponseEdit(match: GuestResponseModel) {
    this.matchedResult = match;
    this.currentStage = RsvpStages.Respond;
  }

  clearMatchedResult() {
    this.matchedResult = null;
    this.currentStage = RsvpStages.Search;
  }

  declineInvitation(guest: GuestResponseModel) {
    guest.confirmedGuests = 0;

    this.guestService.updateGuest(guest).subscribe( () => {
      this.currentStage = RsvpStages.Decline;

    });
    this.clearMatchedResult();
  }

  validateGuest(guest: GuestResponseModel) {
    if (guest.confirmedGuests !== null && guest.confirmedGuests > guest.totalGuestsAllowed) {
      this.guestValidationMessage = 'Sorry, but you have exceeded the total number of allowed guests ('
      + this.matchedResult.totalGuestsAllowed + ').';

      return false;
    }

    this.guestValidationMessage = null;
    return true;
  }

  editResponse(matchedResult: GuestResponseModel) {
    this.setMatchedResult(matchedResult);
  }


  confirmInvitation(guest: GuestResponseModel) {

    if (!this.validateGuest(guest)) {
      return;
    }

    guest.confirmedGuests = this.calculateConfirmedGuests(guest);

    this.guestService.updateGuest(guest).subscribe( () => {
      this.currentStage = RsvpStages.Confirm;
    });

    this.clearMatchedResult();
  }

  private calculateConfirmedGuests(guest: GuestResponseModel): Number {
    if (guest.partner !== '' && guest.totalGuestsAllowed > 1) {
      return guest.totalGuestsAllowed > 2 ? guest.totalGuestsAllowed : 2;
    }

    return 1;
  }

  reactivateSearch() {
    this.currentStage = RsvpStages.Search;
  }

}
