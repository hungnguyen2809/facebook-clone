import { NgModule } from "@angular/core";
import { ActionsSheetDefaultComponent } from './actions-sheet-default/actions-sheet-default.component';
import { ButtonLikeComponent } from './button-like/button-like.component';
import { ButtonCommentComponent } from './button-comment/button-comment.component';
import { ButtonShareComponent } from './button-share/button-share.component';
import { QuickOptionsComponent } from './quick-options/quick-options.component';


@NgModule({
	declarations: [
		ActionsSheetDefaultComponent,
		ButtonLikeComponent,
		ButtonCommentComponent,
		ButtonShareComponent,
		QuickOptionsComponent
	],
	exports: [
		ActionsSheetDefaultComponent,
		ButtonLikeComponent,
		ButtonCommentComponent,
		ButtonShareComponent,
		QuickOptionsComponent
	]
})
export class ComponentsModule {}


//https://www.youtube.com/watch?v=za5NaFavux4
//Xem tự hiểu :)