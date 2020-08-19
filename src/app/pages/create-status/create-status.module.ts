import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateStatusPageRoutingModule } from './create-status-routing.module';
import { CreateStatusPage } from './create-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateStatusPageRoutingModule
  ],
  declarations: [CreateStatusPage]
})
export class CreateStatusPageModule {}
