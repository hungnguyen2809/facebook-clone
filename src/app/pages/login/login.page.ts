import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
	constructor(
		public alertCtl: AlertController,
		public loadingCtrl: LoadingController,
		private roter: Router
	) { }

	ngOnInit() { }

	async language() {
		const alert = await this.alertCtl.create({
			inputs: [
				{
					name: "radio1",
					type: "radio",
					label: "Tiếng Việt",
					value: "value1",
					checked: true,
				},
				{
					name: "radio1",
					type: "radio",
					label: "中国",
					value: "value1",
				},
				{
					name: "radio1",
					type: "radio",
					label: "English",
					value: "value1",
				},
				{
					name: "radio1",
					type: "radio",
					label: "日本語",
					value: "value1",
				},
			],
		});
		await alert.present();
	}

	async onLogin() {
		let load = await this.loadingCtrl.create({
			animated: true,
			message: "Vui lòng chờ...",
			backdropDismiss: false,
		});
		await load.present();

		setTimeout(() => {
			load.dismiss();
			this.roter.navigateByUrl('index');
		}, 1000);
	}
}
