import { EventProfileComponent } from './event-profile/event-profile.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '', component: EventsComponent, children: [
      { path: 'list', component: ListComponent },
      { path: 'eventProfile', component: EventProfileComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
