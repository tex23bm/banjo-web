import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VenueComponent } from './venue/venue.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'our-story', component: StoryComponent },
  { path: 'venue', component: VenueComponent },
  { path: '', redirectTo: '/dashboard' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
