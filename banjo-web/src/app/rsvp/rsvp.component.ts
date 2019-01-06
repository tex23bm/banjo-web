import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { GuestSearchQueryModel } from '../data/guest-search-query-model';
import { queryRefresh } from '@angular/core/src/render3/query';
import { GuestResponseModel } from '../data/guest-response-model';

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

  hardilekTrap: Boolean = false;
  showHardilekTrap: Boolean = false;
  hardilekMessage: String = 'Sorry Jamie, your invitation has been rejected. This is for making me stay up til 2AM so YOU could rsvp now';

  constructor(
    private guestService: GuestService
  ) { }

  ngOnInit() {
  }

  searchForInvitation(query: GuestSearchQueryModel) {

    this.guestSearchMessage = null;

    if (query.ZipCode === '' && query.LastName === '') {
      this.guestSearchMessage = 'Please enter a last name, or a last name & zip code';
      return;
    }

    if (query.ZipCode !== '' && query.LastName === '') {
      this.guestSearchMessage = 'Zip code requres last name in order to locate';
      return;
    }

    if (query.LastName === 'Hardilek' || query.LastName === 'hardilek') {
      this.hardilekTrap = true;
    }

    this.guestService.searchForGuests(query)
      .subscribe(matches => {
        this.possibleMatches = matches;
        if (matches.length === 0) {
          this.guestSearchMessage = 'Could not find any matches. Please try another query.';
          this.possibleMatches = null;
        }

        if (matches.length === 1) {
          this.possibleMatches = null;
          this.matchedResult = matches[0];
        }
      });

    if (this.possibleMatches != null && this.possibleMatches.length === 1) {
      this.setMatchedResult(this.possibleMatches[0]);
    }

  }

  clearSearchQuery() {
    this.guestQuery = new GuestSearchQueryModel();
  }

  clearSearchResults() {
    this.possibleMatches = null;
  }

  setMatchedResult(match: GuestResponseModel) {
    this.clearSearchQuery();
    this.clearSearchResults();
    this.matchedResult = match;
  }

  clearMatchedResult() {
    this.matchedResult = null;
  }

  declineInvitation(guest: GuestResponseModel) {
    guest.confirmedGuests = 0;

    this.guestService.updateGuest(guest).subscribe();
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

  confirmInvitation(guest: GuestResponseModel) {

    if (!this.validateGuest(guest)) {
      return;
    }

    guest.confirmedGuests = this.calculateConfirmedGuests(guest);

    this.guestService.updateGuest(guest).subscribe();
    this.clearMatchedResult();

    if (this.hardilekTrap) {
      this.showHardilekTrap = true;
    }
  }

  private calculateConfirmedGuests(guest: GuestResponseModel): Number {
    if (guest.partner !== '' && guest.totalGuestsAllowed > 1) {
      return guest.totalGuestsAllowed > 2 ? guest.totalGuestsAllowed : 2;
    }

    return 1;
  }

}
