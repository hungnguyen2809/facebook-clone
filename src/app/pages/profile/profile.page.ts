import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras} from "@angular/router";
import { ButtonChip, Profile } from "./../../interfaces";
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
		private router: Router,
		private route: ActivatedRoute,
		public dataProfileService: DataProfileService,
		private modalCtrl: ModalController,
		public processService: ProcessAllService
	) {	}

	ngOnInit() {
		this.btnChips = this.dataProfileService.getBtnChips();

		this.route.queryParams.subscribe((params) => {
			if(params && params.id){
				this.dataProfile = this.dataProfileService.getProfile(JSON.parse(params.id));
			}
		});
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

	onShowProfile(idProfile){
		let idProfileNavigationExtras: NavigationExtras = {
			queryParams: {
				id: JSON.stringify(idProfile)
			}
		};
		this.router.navigate(["profile"], idProfileNavigationExtras);
	}
}
