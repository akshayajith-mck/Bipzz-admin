import { ListingManagementNonVerifiedComponent } from './listing-management-non-verified/listing-management-non-verified.component';
import { ListingManagementVerifiedComponent } from './listing-management-verified/listing-management-verified.component';
import { NonVerifiedComponent } from './non-verified/non-verified.component';
import { AllComponentModules } from './../../../components/component.module';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { AngularMaterialModule } from './../../../module/material.module';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { ListingProfileComponent } from './listing-profile/listing-profile.component';


@NgModule({
  declarations: [VendorComponent, ListComponent,
    ProfileComponent,
    NonVerifiedComponent,
    ListingManagementVerifiedComponent,
    NonVerifiedComponent,
    ListingManagementNonVerifiedComponent,
    ListingProfileComponent
  ],
  imports: [
    CommonModule,
    NgImageFullscreenViewModule,
    VendorRoutingModule,
    AllComponentModules,
    AngularMaterialModule
  ]
})
export class VendorModule { }
