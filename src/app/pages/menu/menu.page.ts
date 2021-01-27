import { Component, OnInit } from "@angular/core";
import { DataProfileService } from "src/app/services/data-profile.service";
import { Profile } from "src/app/interfaces";
import { NavController } from '@ionic/angular';

@Component({
	selector: "app-menu",
	templateUrl: "./menu.page.html",
	styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
	public profileUser: Profile;

	constructor(
		public navCtrl: NavController,
		private dataProfileService: DataProfileService
	) {}

	ngOnInit() {
		this.profileUser = this.dataProfileService.getProfileCurrent();
	}

	onShowProfile(): void {
		this.navCtrl.navigateForward(`/profile/${this.profileUser.id}`);
	}
}
