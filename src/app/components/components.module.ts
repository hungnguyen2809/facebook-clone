import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionsSheetDefaultComponent } from './actions-sheet-default/actions-sheet-default.component';
import { QuickOptionsComponent } from './quick-options/quick-options.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { MessengerIconComponent } from './messenger-icon/messenger-icon.component';
import { LikeCommentShareComponent } from './like-comment-share/like-comment-share.component';
import { NotificationsCardComponent } from './notifications-card/notifications-card.component';
import { ComponentStoryComponent } from './component-story/component-story.component';
import { FbCardAllContentComponent } from './fb-card-all-content/fb-card-all-content.component';
import { MoreIconComponent } from './more-icon/more-icon.component';
import { VideoCardAllComponent } from './video-card-all/video-card-all.component';


@NgModule({
	declarations: [
		ActionsSheetDefaultComponent,
		QuickOptionsComponent,
		MenuCardComponent,
		SearchIconComponent,
		UserIconComponent,
		MoreIconComponent,
		MessengerIconComponent,
		LikeCommentShareComponent,
		NotificationsCardComponent,
		ComponentStoryComponent,
		FbCardAllContentComponent,
		VideoCardAllComponent,
	],
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule
	],
	exports: [
		ActionsSheetDefaultComponent,
		QuickOptionsComponent,
		MenuCardComponent,
		SearchIconComponent,
		MoreIconComponent,
		UserIconComponent,
		MessengerIconComponent,
		LikeCommentShareComponent,
		NotificationsCardComponent,
		ComponentStoryComponent,
		FbCardAllContentComponent,
		VideoCardAllComponent,
	]
})
export class ComponentsModule {}


//https://www.youtube.com/watch?v=za5NaFavux4
//Xem tự hiểu :)