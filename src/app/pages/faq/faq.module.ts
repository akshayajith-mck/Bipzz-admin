import { AllComponentModules } from 'src/app/components/component.module';
import { AngularMaterialModule } from './../../module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    AngularMaterialModule,
    AllComponentModules
  ]
})
export class FaqModule { }
