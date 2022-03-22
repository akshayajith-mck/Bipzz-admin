import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../module/material.module';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    ToastModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
