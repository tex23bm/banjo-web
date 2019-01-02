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

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) {
    console.log(this.baseUrl);
  }

  searchForGuests(query: GuestSearchQueryModel): Observable<GuestResponseModel[]> {
    const url = this.buildGuestSearchUrl(query);
    return this.http.get<GuestResponseModel[]>(url);
  }

  updateGuest(guest: GuestResponseModel): Observable<any> {
    const url = `${this.baseUrl}/${guest.id}`;
    return this.http.put(url, guest, this.httpOptions).pipe();
  }

  private buildGuestSearchUrl(query: GuestSearchQueryModel): string {
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
