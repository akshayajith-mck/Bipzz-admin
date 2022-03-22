import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashPromotionComponent } from './flash-promotion.component';

const routes: Routes = [{ path: '', component: FlashPromotionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashPromotionRoutingModule { }
