import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ButtonChip, Card, Profile } from "./../../interfaces";
import { DataProfileService } from "src/app/services/data-profile.service";
import { ModalController } from "@ionic/angular";
import { CreateStatusPage } from "../create-status/create-status.page";
import { ProcessAllService } from "src/app/services/process-all.service";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.page.html",
	styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
	public btnChips: ButtonChip[] = [];
	public dataProfile: Profile;

	constructor(
		public router: Router,
		private profileService: DataProfileService,
		private modalCtrl: ModalController,
		private processService: ProcessAllService
	) {}

	ngOnInit() {
		this.btnChips = this.profileService.getBtnChips();
		this.dataProfile = this.profileService.getProfile();
	}

	EditProfile() {
		this.router.navigateByUrl("editprofile");
	}
	
	Banbe() {
		this.router.navigateByUrl("banbe");
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
}
