import { Component, OnInit, Input } from "@angular/core";
import { PopoverController, ActionSheetController, NavController } from "@ionic/angular";
import { ProcessAllService } from "src/app/services/process-all.service";
import { MoreOptionsComponent } from "./../more-options/more-options.component";
import { Card } from "./../../interfaces";
import { Router, NavigationExtras } from "@angular/router";
import { PhotoViewer } from "@ionic-native/photo-viewer/ngx";
import { VideoPlayer } from "@ionic-native/video-player/ngx";

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
		public processService: ProcessAllService,
		private navCtrl: NavController,
		private router: Router,
		private photoViewerCtrl: PhotoViewer,
		private videoPlayerCtrl: VideoPlayer,
	) {}

	ngOnInit() {}

	async onMoreOptions(eve: any) {
		const showMoreOp = await this.popoverCtrl.create({
			component: MoreOptionsComponent,
			animated: true,
			event: eve,
			componentProps: {
				data: this.card,
			},
			keyboardClose: true,
			mode: "md",
			translucent: true,
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
					icon: "chatbubble-ellipses-outline",
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

	onDetails(value: Card): void {
		let dataExtras: NavigationExtras = {
			state: {
				data: value
			}
		}
		this.router.navigate(["chitiet"], dataExtras);
	}

	onShowProfile(card): void{
		this.navCtrl.navigateForward(`/profile/${card.id}`);
	}

	previewPhoto(url) {
		this.photoViewerCtrl.show(url);
	}

	previewVideo(url) {
		this.videoPlayerCtrl.play(url)
		.then(() => {})
		.catch((err) => { 
			alert(err); 
		});
	}
}
