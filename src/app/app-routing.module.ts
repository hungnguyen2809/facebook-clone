import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chitiet',
    loadChildren: () => import('./pages/chitiet/chitiet.module').then( m => m.ChitietPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },  {
    path: 'actions-crate-status',
    loadChildren: () => import('./pages/actions-crate-status/actions-crate-status.module').then( m => m.ActionsCrateStatusPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
