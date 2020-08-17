import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanbePage } from './banbe.page';

const routes: Routes = [
  {
    path: '',
    component: BanbePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanbePageRoutingModule {}
