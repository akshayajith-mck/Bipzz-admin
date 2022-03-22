import { ProfileComponent } from './profile/profile.component';

import { ListComponent } from './list/list.component';
import { AngularMaterialModule } from './../../../module/material.module';
import { NgModule } from '@angular/core';
import { AllComponentModules } from './../../../components/component.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { NgxMatFileInputModule } from '@angular-material-components/file-input';

@NgModule({
  declarations: [UserComponent, ListComponent, ProfileComponent],
  imports: [
    AllComponentModules,
    NgxMatFileInputModule,
    UserRoutingModule,
    AllComponentModules,
    AngularMaterialModule
  ]
})
export class UserModule { }
