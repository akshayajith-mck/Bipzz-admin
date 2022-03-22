import { ManagementComponent } from './management.component';
import { AllComponentModules } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';


@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    AllComponentModules,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
