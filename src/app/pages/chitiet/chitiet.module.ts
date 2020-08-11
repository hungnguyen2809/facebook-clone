import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChitietPageRoutingModule } from './chitiet-routing.module';
import { ChitietPage } from './chitiet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChitietPageRoutingModule
  ],
  declarations: [ChitietPage]
})
export class ChitietPageModule {}
