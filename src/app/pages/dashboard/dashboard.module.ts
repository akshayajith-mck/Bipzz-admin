import { NgModule } from '@angular/core';
import { AllComponentModules } from './../../components/component.module';
import { AngularMaterialModule } from './../../module/material.module';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  declarations: [DashboardComponent,
  ],
  imports: [
    CommonModule,
    AllComponentModules,
    DashboardRoutingModule,
    AngularMaterialModule,
  ]
})
export class DashboardModule { }
