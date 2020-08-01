import { Component, OnInit } from "@angular/core";
import { PopoverController, ActionSheetController } from "@ionic/angular";
import { MoreActionsPage } from "../more-actions/more-actions.page";

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
	public numberLike: number = 7999;
	public isLike: boolean = false;

	constructor(
		public popoverCtrl: PopoverController,
		public actionsSheetCtrl: ActionSheetController
	) {}

	ngOnInit() {}

	async onMoreOptions() {
		const showMoreOp = await this.popoverCtrl.create({
			component: MoreActionsPage,
			animated: true,
			translucent: true,
		});
		return await showMoreOp.present();
	}

	onLike(): void {
		if (this.isLike) {
			this.numberLike = this.numberLike - 1;
			this.isLike = !this.isLike;
		} else {
			this.numberLike = this.numberLike + 1;
			this.isLike = !this.isLike;
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
}
