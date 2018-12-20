import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GuestService {

  private baseUrl = environment.apiUrl + '/guests';

  constructor(
    private http: HttpClient,
  ) {
    console.log(this.baseUrl);
  }

}
