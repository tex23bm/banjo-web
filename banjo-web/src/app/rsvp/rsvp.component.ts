import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  constructor(
    private guestService: GuestService
  ) { }

  ngOnInit() {
  }

}
