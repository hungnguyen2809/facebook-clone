import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WatchPageRoutingModule } from './watch-routing.module';
import { WatchPage } from './watch.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [WatchPage]
})
export class WatchPageModule {}
