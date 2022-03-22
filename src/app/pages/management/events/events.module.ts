import { EventProfileComponent } from './event-profile/event-profile.component';
import { AngularMaterialModule } from './../../../module/material.module';
import { AllComponentModules } from './../../../components/component.module';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';


@NgModule({
  declarations: [EventsComponent, ListComponent, EventProfileComponent],
  imports: [
    CommonModule,
    AllComponentModules,
    EventsRoutingModule,
    AngularMaterialModule
  ]
})
export class EventsModule { }
