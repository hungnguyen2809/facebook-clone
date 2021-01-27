import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStatusPage } from './create-status.page';

const routes: Routes = [
  {
    path: '',
    component: CreateStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateStatusPageRoutingModule {}
