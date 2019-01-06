import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';
import { CommentService } from '../services/comments/comment.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
  providers: [
    GuestService,
    CommentService
  ]
})
export class ResponseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
