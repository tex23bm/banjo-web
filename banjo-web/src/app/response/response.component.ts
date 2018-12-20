import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
  providers: [GuestService]
})
export class ResponseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
