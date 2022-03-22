import { GlobalInterceptorService } from './services/global-interceptor.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
const routes: Routes = [
  {
    path: 'pages', canActivate: [GlobalInterceptorService],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'pages' },

];

const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
