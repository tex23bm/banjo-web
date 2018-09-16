import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VenueComponent } from './venue/venue.component';
import { StoryComponent } from './story/story.component';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { RegistryComponent } from './registry/registry.component';

const routes: Routes = [
  { path: 'our-story', component: StoryComponent },
  { path: 'wedding-party', component: WeddingPartyComponent},
  { path: 'details', component: VenueComponent },
  { path: 'registry', component: RegistryComponent },
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
