import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WeddingPartyMemberModel } from '../../data/wedding-party-member-model';

@Component({
  selector: 'app-wedding-party-member',
  templateUrl: './wedding-party-member.component.html',
  styleUrls: ['./wedding-party-member.component.css']
})
export class WeddingPartyMemberComponent implements OnInit {
  @Input() model: WeddingPartyMemberModel;
  public imagePath: string;

  constructor() {
  }

  ngOnInit() {
    this.model.imagePath = 'https://karber-dev.azureedge.net/' + this.model.imagePath;
  }
}
