import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionsCrateStatusPageRoutingModule } from './actions-crate-status-routing.module';

import { ActionsCrateStatusPage } from './actions-crate-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionsCrateStatusPageRoutingModule
  ],
  declarations: [ActionsCrateStatusPage]
})
export class ActionsCrateStatusPageModule {}
