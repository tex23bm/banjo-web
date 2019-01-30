import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GuestCommentModel } from '../../data/guest-comment-model';


@Injectable()
export class CommentService {

  private baseUrl = environment.apiUrl + '/comments';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) {
  }

  getComments(): Observable<GuestCommentModel[]> {
    const url = this.baseUrl;
    return this.http.get<GuestCommentModel[]>(url);
  }

  addComment(comment: GuestCommentModel): Observable<any> {
    const url = this.baseUrl;
    return this.http.post(url, comment, this.httpOptions).pipe();
  }

}
