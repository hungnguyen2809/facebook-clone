import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ButtonChip } from "./../../interfaces";
import { DataProfileService } from "src/app/services/data-profile.service";
import { ModalController, NavController } from "@ionic/angular";
import { CreateStatusPage } from "../create-status/create-status.page";
import { ProcessAllService } from "src/app/services/process-all.service";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.page.html",
	styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
	public btnChips: ButtonChip[] = [];
	public dataProfile: any = {};
	private idProfile: any = null;

	constructor(
		private navCtrl: NavController,
		private route: ActivatedRoute,
		private modalCtrl: ModalController,
		public dataProfileService: DataProfileService,
		public processService: ProcessAllService
	) {
		this.idProfile = route.snapshot.paramMap.get("id");
	}

	ngOnInit() {
		this.btnChips = this.dataProfileService.getBtnChips();
		this.dataProfile = this.dataProfileService.getProfile(Number(this.idProfile));
	}

	EditProfile() {
		this.navCtrl.navigateForward("editprofile");
	}

	Banbe() {
		this.navCtrl.navigateForward("banbe");
	}

	onCreateStatus() {
		this.modalCtrl
			.create({
				component: CreateStatusPage,
				animated: true,
				keyboardClose: true,
				mode: "ios",
				backdropDismiss: false,
				cssClass: "modalStatus",
			})
			.then((obj) => {
				this.processService.idCreateStatus = obj.id;
				obj.present();
			});
	}

	onShowProfile(idProfile) {
		this.navCtrl.navigateForward(`/profile/${idProfile}`);
	}
}
