import { ProcessAllService } from "src/app/services/process-all.service";
import { Component, OnInit, Input } from "@angular/core";
import { VideoCard } from "src/app/interfaces";
import { PopoverController, ActionSheetController } from "@ionic/angular";
import { MoreActionsPage } from "src/app/pages/more-actions/more-actions.page";

@Component({
	selector: "video-card-all",
	templateUrl: "./video-card-all.component.html",
	styleUrls: ["./video-card-all.component.scss"],
})
export class VideoCardAllComponent implements OnInit {
	@Input() cardVideo: VideoCard;
	public showMoreContent: boolean = false;

	constructor(
		public processService: ProcessAllService,
		public popoverCtrl: PopoverController,
		public actionsSheetCtrl: ActionSheetController
	) {}

	ngOnInit() {}

	async onMoreOptions() {
		const showMoreOp = await this.popoverCtrl.create({
			component: MoreActionsPage,
			animated: true,
		});
		return await showMoreOp.present();
	}

	onLike(): void {
		if (this.cardVideo.isLike) {
			this.cardVideo.numberLike = this.cardVideo.numberLike - 1;
			this.cardVideo.isLike = !this.cardVideo.isLike;
		} else {
			this.cardVideo.numberLike = this.cardVideo.numberLike + 1;
			this.cardVideo.isLike = !this.cardVideo.isLike;
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

	onShowMoreContent(): void {
		this.showMoreContent = !this.showMoreContent;
	}
}
