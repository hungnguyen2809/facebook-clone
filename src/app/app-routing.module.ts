import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile/:id',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
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
    path: 'banbe',
    loadChildren: () => import('./pages/banbe/banbe.module').then( m => m.BanbePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
