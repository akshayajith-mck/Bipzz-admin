import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './../../module/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';


@NgModule({
  declarations: [
    GeneralComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    GeneralRoutingModule,
    ToastModule,
    ReactiveFormsModule
  ]
})
export class GeneralModule { }
