import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChitietPageRoutingModule } from './chitiet-routing.module';
import { ChitietPage } from './chitiet.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChitietPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ChitietPage]
})
export class ChitietPageModule {}
