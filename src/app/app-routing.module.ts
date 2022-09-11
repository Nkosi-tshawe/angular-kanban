import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'',loadChildren: ()=> import('./modules/login/login.module').then(m => m.LoginModule)},
  { path: 'dashboard', loadChildren: ()=> import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule)},
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path:'*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
