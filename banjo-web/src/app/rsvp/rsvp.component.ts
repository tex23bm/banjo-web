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


  constructor(
    private guestService: GuestService
  ) { }

  ngOnInit() {
  }

  searchForInvitation(query: GuestSearchQueryModel) {
    this.guestService.searchForGuests(query)
      .subscribe(matches => this.possibleMatches = matches);

    if (this.possibleMatches != null && this.possibleMatches.length === 1) {
      this.setMatchedResult(this.possibleMatches[0]);
    }

  }

  clearSearchResults() {
    this.possibleMatches = null;
  }

  setMatchedResult(match: GuestResponseModel) {
    this.possibleMatches = null;
    this.matchedResult = match;
  }

  clearMatchedResult() {
    this.matchedResult = null;
  }

  declineInvitation(guest: GuestResponseModel) {
    guest.confirmedGuests = 0;

    this.confirmInvitation(guest);
  }

  validateGuest(guest: GuestResponseModel) {
    if (guest.confirmedGuests == null || guest.confirmedGuests > guest.totalGuestsAllowed) {
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

    this.guestService.updateGuest(guest);

    this.clearMatchedResult();
  }

}
