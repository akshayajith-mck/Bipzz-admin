import { DownloadService } from './../../../services/download.service';
import { AllComponentModules } from './../../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    FormsModule, AllComponentModules,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReportsRoutingModule
  ],
  providers:[DownloadService],

})
export class ReportsModule { }
