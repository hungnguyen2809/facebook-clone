import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-menu",
	templateUrl: "./menu.page.html",
	styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
	constructor(public routerCtrl: Router) {}

	ngOnInit() {}

	onShowProfile(): void {
		this.routerCtrl.navigateByUrl('profile');
	}
}
