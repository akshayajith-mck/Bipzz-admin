import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteComponent } from './quote.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', component: QuoteComponent, children: [
      {
        path: 'list', component: ListComponent
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
