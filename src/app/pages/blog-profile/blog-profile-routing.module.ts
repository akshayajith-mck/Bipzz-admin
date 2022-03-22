import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogProfileComponent } from './blog-profile.component';

const routes: Routes = [{path:'',component:BlogProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogProfileRoutingModule { }
