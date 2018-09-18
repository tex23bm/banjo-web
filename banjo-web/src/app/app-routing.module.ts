import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoryComponent } from './story/story.component';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { DetailsComponent } from './details/details.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  { path: 'our-story', component: StoryComponent },
  { path: 'wedding-party', component: WeddingPartyComponent},
  { path: 'details', component: DetailsComponent },
  { path: 'rsvp', component: ResponseComponent },
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
