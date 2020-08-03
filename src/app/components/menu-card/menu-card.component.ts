import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";

@Component({
	selector: "menu-card",
	templateUrl: "./menu-card.component.html",
	styleUrls: ["./menu-card.component.scss"],
})
export class MenuCardComponent implements OnInit {
	public isShowMoreSee: boolean = false;
	public isShowMoreHelp: boolean = false;
	public isShowMoreSettingPrivate: boolean = false;

	constructor(
		private routerService: Router,
		private alertCtrl: AlertController,
		private loadCtrl: LoadingController
	) {}

	ngOnInit() {}

	onMoreSee(): void {
		this.isShowMoreSee = !this.isShowMoreSee;
	}

	onMoreHelp(): void {
		this.isShowMoreHelp = !this.isShowMoreHelp;
	}

	onMoreSettingPrivate(): void {
		this.isShowMoreSettingPrivate = !this.isShowMoreSettingPrivate;
	}

	async onLogout() {
		let logout = await this.alertCtrl.create({
			header: "Thông báo",
			message: "Bạn có chắc muốn đăng xuất ?",
			animated: true,
			backdropDismiss: false,
			buttons: [
				{
					text: "Huỷ bỏ",
					role: "cancel",
					handler: () => {},
				},
				{
					text: "Đồng ý",
					handler: () => {
						let load = this.loadCtrl.create({
							animated: true,
							backdropDismiss: false,
							message: "Đang đăng xuất...",
						});
						load.then((res) => res.present());

						setTimeout(() => {
							load.then((res) => res.dismiss());
							this.routerService.navigateByUrl('login');
						}, 1000);
					},
				},
			],
		});
		return await logout.present();
	}
}
