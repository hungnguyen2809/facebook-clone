import { ComponentsModule } from './../../components/components.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MoreActionsPageRoutingModule } from "./more-actions-routing.module";
import { MoreActionsPage } from "./more-actions.page";

@NgModule({
	imports: [
    ComponentsModule,
		CommonModule,
		FormsModule,
		IonicModule,
		MoreActionsPageRoutingModule,
	],
	declarations: [MoreActionsPage],
})
export class MoreActionsPageModule {}
