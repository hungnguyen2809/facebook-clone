import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MoreActionsPageRoutingModule } from "./more-actions-routing.module";
import { MoreActionsPage } from "./more-actions.page";
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		MoreActionsPageRoutingModule,
		ComponentsModule,
	],
	declarations: [MoreActionsPage],
})
export class MoreActionsPageModule {}
