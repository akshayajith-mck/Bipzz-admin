import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './complaints.component';
import { AngularMaterialModule } from 'src/app/module/material.module';
import { AllComponentModules } from 'src/app/components/component.module';


@NgModule({
  declarations: [ComplaintsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ComplaintsRoutingModule,
    AllComponentModules
  ]
})
export class ComplaintsModule { }
