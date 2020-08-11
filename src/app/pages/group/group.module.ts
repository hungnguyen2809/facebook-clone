import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { GroupPageRoutingModule } from "./group-routing.module";
import { GroupPage } from "./group.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GroupPageRoutingModule,
		ComponentsModule,
	],
	declarations: [GroupPage],
})
export class GroupPageModule {}
