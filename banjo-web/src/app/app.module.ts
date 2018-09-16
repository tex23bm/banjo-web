import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VenueComponent } from './venue/venue.component';
import { StoryComponent } from './story/story.component';
import { MenuComponent } from './menu/menu.component';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { WeddingPartyMemberComponent } from './wedding-party/wedding-party-member/wedding-party-member.component';
import { RegistryComponent } from './registry/registry.component';
import { VendorsComponent } from './vendors/vendors.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VenueComponent,
    StoryComponent,
    MenuComponent,
    WeddingPartyComponent,
    WeddingPartyMemberComponent,
    RegistryComponent,
    VendorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
