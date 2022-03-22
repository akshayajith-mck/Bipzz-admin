import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteComponent } from './quote.component';
import { AllComponentModules } from 'src/app/components/component.module';
import { AngularMaterialModule } from 'src/app/module/material.module';


@NgModule({
  declarations: [QuoteComponent, ListComponent],
  imports: [
    CommonModule,
    AllComponentModules,
    AngularMaterialModule,
    QuoteRoutingModule
  ]
})
export class QuoteModule { }
