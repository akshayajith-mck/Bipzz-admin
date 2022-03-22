import { ListingProfileComponent } from './listing-profile/listing-profile.component';
import { ListingManagementNonVerifiedComponent } from './listing-management-non-verified/listing-management-non-verified.component';
import { ListingManagementVerifiedComponent } from './listing-management-verified/listing-management-verified.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { NonVerifiedComponent } from './non-verified/non-verified.component';
const routes: Routes = [
  {
    path: '', component: VendorComponent, children: [
      { path: 'list', component: ListComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'approval', component: NonVerifiedComponent },
      { path: 'verifiedlisiting', component: ListingManagementVerifiedComponent },
      { path: 'nonVerifiedlisiting', component: ListingManagementNonVerifiedComponent },
      { path: 'listProfile', component: ListingProfileComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }

