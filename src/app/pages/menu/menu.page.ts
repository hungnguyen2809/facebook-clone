import { Router, NavigationExtras } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { DataProfileService } from "src/app/services/data-profile.service";
import { Profile } from "src/app/interfaces";

@Component({
	selector: "app-menu",
	templateUrl: "./menu.page.html",
	styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
	public profile: Profile;

	constructor(
		public router: Router,
		private dataProfileService: DataProfileService
	) {}

	ngOnInit() {
		this.profile = this.dataProfileService.getProfileCurrent();
	}

	onShowProfile(): void {
		let idProfileNavigationExtras: NavigationExtras = {
			queryParams: {
				id: JSON.stringify(this.profile.id)
			}
		};
		this.router.navigate(["profile"], idProfileNavigationExtras);
	}
}
