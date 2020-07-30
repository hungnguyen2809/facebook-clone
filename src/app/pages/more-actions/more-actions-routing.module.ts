import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreActionsPage } from './more-actions.page';

const routes: Routes = [
  {
    path: '',
    component: MoreActionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreActionsPageRoutingModule {}
