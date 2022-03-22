import { NotfoundComponent } from './../notfound/notfound.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralComponent } from './general.component';

const routes: Routes = [{
  path: '', component: GeneralComponent,
  children: [
    { path: 'banner', component: BannerComponent },
    { path: 'complaints', loadChildren: () => import('./complaints/complaints.module').then(m => m.ComplaintsModule) },
    { path: 'report', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
    { path: 'flash', loadChildren: () => import('./flash-promotion/flash-promotion.module').then(m => m.FlashPromotionModule) },
    { path: '**', component: NotfoundComponent }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }

