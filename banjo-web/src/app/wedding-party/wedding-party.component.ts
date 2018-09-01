import { Component, OnInit } from '@angular/core';
import { WeddingPartyMemberModel } from '../data/wedding-party-member-model';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.css']
})
export class WeddingPartyComponent implements OnInit {

  pastor: WeddingPartyMemberModel =
  { 'name': 'Alec Kemp', 'imagePath': 'wedding-party/alec.jpg', 'altText': 'Alec' };

  groomsmen: WeddingPartyMemberModel[] = [
    { 'name': 'Chambers', 'imagePath': 'wedding-party/chambers.jpg', 'altText': 'Baby Giraffe' },
    { 'name': 'David Christenson', 'imagePath': 'wedding-party/david.jpg', 'altText': 'David' },
    { 'name': 'Jordan Pratt', 'imagePath': 'wedding-party/jordan.jpg', 'altText': 'Jordan' },
    { 'name': 'Shawn Sewall', 'imagePath': 'wedding-party/shawn.jpg', 'altText': 'Shawn' },
    { 'name': 'Danny Tipton', 'imagePath': 'wedding-party/danny.jpg', 'altText': 'Danny' },
    { 'name': 'Jay Wood', 'imagePath': 'wedding-party/jay.jpg', 'altText': 'Jay' },
  ];

  bridesmaids: WeddingPartyMemberModel[] = [
    { 'name': 'Anya Rathore', 'imagePath': 'wedding-party/anya.jpg', 'altText': 'Anya' },
    { 'name': 'Melanie Elizabeth', 'imagePath': 'wedding-party/mel.jpg', 'altText': 'Mel' },
    { 'name': 'Jamie Hardilek', 'imagePath': 'wedding-party/jamie.jpg', 'altText': 'Paula' },
    { 'name': 'Brandi Harper', 'imagePath': 'wedding-party/brandi.jpg', 'altText': 'Brandi' },
    { 'name': 'Natasha Harper', 'imagePath': 'wedding-party/tasha.jpg', 'altText': 'Natasha' },
    { 'name': 'Amber Johnson', 'imagePath': 'wedding-party/amber.jpg', 'altText': 'Amber' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
