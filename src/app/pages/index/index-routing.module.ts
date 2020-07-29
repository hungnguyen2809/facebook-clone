import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'group',
        children: [
          {
            path: '',
            loadChildren: () => import('../group/group.module').then( m => m.GroupPageModule)
          }
        ]
      },
      {
        path: 'watch',
        children: [
          {
            path: '',
            loadChildren: () => import('../watch/watch.module').then( m => m.WatchPageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
          }
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/index/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/index/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
