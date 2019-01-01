import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { environment } from '../../environments/environment';
import { GuestSearchQueryModel } from '../data/guest-search-query-model';
import { GuestResponseModel } from '../data/guest-response-model';

@Injectable()
export class GuestService {

  private baseUrl = environment.apiUrl + '/guests';

  constructor(
    private http: HttpClient,
  ) {
    console.log(this.baseUrl);
  }

  searchForGuests(query: GuestSearchQueryModel): Observable<GuestResponseModel[]> {
    const guests: GuestResponseModel[] = [
      { id: 1, name: 'Bill', partner: 'Onja', lastName: 'Meehan', address: '2211 Grapevine ln'
        , zipcode: '75007', totalGuestsAllowed: 2, confirmedGuests: undefined, dateModified: new Date('12/30/2018') },
      { id: 1, name: 'Manny', partner: null, lastName: 'Guzman', address: '42 Maynard Rd'
        , zipcode: '75007', totalGuestsAllowed: 1, confirmedGuests: undefined, dateModified: new Date('12/31/2018') }
    ];

    const url = this.buildGuestSearchUrl(query);

    console.log(url);
    // this.http.get<GuestResponseModel[]>(url);

    return of(guests);
  }

  updateGuest(guest: GuestResponseModel) {
    alert('Saved guest: ' + guest.name + ' with ' + guest.confirmedGuests + ' guests confirmed' );
  }

  private buildGuestSearchUrl(query: GuestSearchQueryModel): String {
    let url = this.baseUrl;

    if (query.ZipCode !== '' || query.LastName !== '') {
      url += '?';

      if (query.ZipCode !== '') {
        url += `zipCode=${query.ZipCode}`;

        if (query.LastName !== '') {
          url += '&';
        }
      }

      if (query.LastName !== '') {
        url += `lastName=${query.LastName}`;
      }

    }

    return url;
  }

}
