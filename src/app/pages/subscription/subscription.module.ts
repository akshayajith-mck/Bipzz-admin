import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { AngularMaterialModule } from 'src/app/module/material.module';
import { AllComponentModules } from 'src/app/components/component.module';


@NgModule({
  declarations: [SubscriptionComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    AngularMaterialModule,
    AllComponentModules
  ]
})
export class SubscriptionModule { }
