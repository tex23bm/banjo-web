import { Component, OnInit } from '@angular/core';
import { WeddingPartyMemberModel } from '../data/wedding-party-member-model';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.css']
})
export class WeddingPartyComponent implements OnInit {

  pastor: WeddingPartyMemberModel =
  { 'name': 'Alec Kemp', 'imagePath': 'wedding-party/alec.jpg', 'altText': 'Alec', 'title': 'Level 45 Warlock'};

  groomsmen: WeddingPartyMemberModel[] = [
    { 'name': 'Chambers', 'imagePath': 'wedding-party/chambers.jpg', 'altText': 'Baby Giraffe', 'title': 'Best Man' },
    { 'name': 'David Christenson', 'imagePath': 'wedding-party/david.jpg', 'altText': 'David', 'title': null },
    { 'name': 'Jordan Pratt', 'imagePath': 'wedding-party/jordan.jpg', 'altText': 'Jordan', 'title': null },
    { 'name': 'Shawn Sewall', 'imagePath': 'wedding-party/shawn.jpg', 'altText': 'Shawn', 'title': null },
    { 'name': 'Danny Tipton', 'imagePath': 'wedding-party/danny.jpg', 'altText': 'Danny', 'title': null },
    { 'name': 'Jay Wood', 'imagePath': 'wedding-party/jay.jpg', 'altText': 'Jay', 'title': null },
  ];

  bridesmaids: WeddingPartyMemberModel[] = [
    { 'name': 'Anya Rathore', 'imagePath': 'wedding-party/anya.jpg', 'altText': 'Anya', 'title': 'Maid of Honor' },
    { 'name': 'Melanie Elizabeth', 'imagePath': 'wedding-party/mel.jpg', 'altText': 'Mel', 'title': null },
    { 'name': 'Jamie Hardilek', 'imagePath': 'wedding-party/jamie.jpg', 'altText': 'Paula', 'title': null },
    { 'name': 'Brandi Harper', 'imagePath': 'wedding-party/brandi.jpg', 'altText': 'Brandi', 'title': null },
    { 'name': 'Natasha Harper', 'imagePath': 'wedding-party/tasha.jpg', 'altText': 'Natasha', 'title': null },
    { 'name': 'Amber Johnson', 'imagePath': 'wedding-party/amber.jpg', 'altText': 'Amber', 'title': null },
  ];

  constructor() { }

  ngOnInit() {
  }

}
