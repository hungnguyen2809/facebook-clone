import { Component, OnInit } from "@angular/core";
import { PopoverController, ActionSheetController } from "@ionic/angular";
import { MoreActionsPage } from "../more-actions/more-actions.page";
import { Story } from './../../interfaces';

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
	public numberLike: number = 7999;
	public isLike: boolean = false;
	public img: string = 'https://i.imgur.com/vfHjMCH.jpg';

	public listStory: Story[] = [];
	public listActive: string[] = [];

	constructor(
		public popoverCtrl: PopoverController,
		public actionsSheetCtrl: ActionSheetController
	) {}

	ngOnInit() {
		this.listStory = [
			{
				content: 'https://i.imgur.com/Vi1ihEw.jpg',
				avatar: 'https://i.imgur.com/vfHjMCH.jpg',
				name: 'Tráng Nguyễn'
			},
			{
				content: 'https://i.imgur.com/Vi1ihEw.jpg',
				avatar: 'https://i.imgur.com/vfHjMCH.jpg',
				name: 'Nguyễn Tiến Thành'
			},
			{
				content: 'https://i.imgur.com/PfZ6kcm.jpg',
				avatar: 'https://i.imgur.com/vfHjMCH.jpg',
				name: 'Đức Quân'
			},
		];

		this.listActive = [
			'https://i.imgur.com/Vi1ihEw.jpg',
			'https://i.imgur.com/OHF3jkZ.png',
			'https://i.imgur.com/PfZ6kcm.jpg',
			'https://i.imgur.com/Vi1ihEw.jpg',
			'https://i.imgur.com/OHF3jkZ.png',
			'https://i.imgur.com/PfZ6kcm.jpg',
			'https://i.imgur.com/Vi1ihEw.jpg',
			'https://i.imgur.com/OHF3jkZ.png',
			'https://i.imgur.com/PfZ6kcm.jpg',
			'https://i.imgur.com/vfHjMCH.jpg'
		];
	}

	async onMoreOptions() {
		const showMoreOp = await this.popoverCtrl.create({
			component: MoreActionsPage,
			animated: true
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
