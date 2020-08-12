import { Card } from './../../interfaces';
import { Component, OnInit, Input } from "@angular/core";
import { MoreActionsPage } from "./../../pages/more-actions/more-actions.page";
import { PopoverController, ActionSheetController } from "@ionic/angular";
import { ProcessAllService } from 'src/app/services/process-all.service';

@Component({
	selector: "fb-card-all-content",
	templateUrl: "./fb-card-all-content.component.html",
	styleUrls: ["./fb-card-all-content.component.scss"],
})
export class FbCardAllContentComponent implements OnInit {
	@Input() card: Card;
	public showMoreContent: boolean = false;

	constructor(
		public popoverCtrl: PopoverController,
		public actionsSheetCtrl: ActionSheetController,
		public processService: ProcessAllService
	) {}

	ngOnInit() {
	}

	async onMoreOptions() {
		const showMoreOp = await this.popoverCtrl.create({
			component: MoreActionsPage,
			animated: true,
		});
		return await showMoreOp.present();
	}

	onLike(): void {
		if (this.card.isLike) {
			this.card.numberLike = this.card.numberLike - 1;
			this.card.isLike = !this.card.isLike;
		} else {
			this.card.numberLike = this.card.numberLike + 1;
			this.card.isLike = !this.card.isLike;
		}
	}

	onComment(): void {}

	async onShare() {
		let showShare = await this.actionsSheetCtrl.create({
			header: "Chia sẻ qua",
			animated: true,
			buttons: [
				{
					text: "Chia sẻ lên tin của bạn",
					icon: "add-circle-outline",
					handler: () => {},
				},
				{
					text: "Gửi bằng Messenger",
					icon: "logo-medium",
					handler: () => {},
				},
				{
					text: "Chia sẻ lên một nhóm",
					icon: "people-outline",
					handler: () => {},
				},
				{
					text: "Tùy chọn khác...",
					icon: "options-outline",
					handler: () => {},
				},
				{
					text: "Hủy bỏ",
					role: "cancel",
					handler: () => {},
				},
			],
		});
		return await showShare.present();
	}

	onShowMoreContent(): void{
		this.showMoreContent = !this.showMoreContent;
	}

}
