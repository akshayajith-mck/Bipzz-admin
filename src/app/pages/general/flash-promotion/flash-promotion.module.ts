import { AngularMaterialModule } from './../../../module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashPromotionRoutingModule } from './flash-promotion-routing.module';
import { FlashPromotionComponent } from './flash-promotion.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FlashPromotionComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlashPromotionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FlashPromotionModule { }
