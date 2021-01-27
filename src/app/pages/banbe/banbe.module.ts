import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanbePageRoutingModule } from './banbe-routing.module';

import { BanbePage } from './banbe.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanbePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [BanbePage]
})
export class BanbePageModule {}
