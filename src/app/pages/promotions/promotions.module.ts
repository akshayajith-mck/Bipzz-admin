import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsComponent } from './promotions.component';
import { AngularMaterialModule } from 'src/app/module/material.module';
import { AllComponentModules } from 'src/app/components/component.module';


@NgModule({
  declarations: [PromotionsComponent],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    AngularMaterialModule,
    AllComponentModules
  ]
})
export class PromotionsModule { }
