import { Component, OnInit } from "@angular/core";
import { NavParams, PopoverController } from "@ionic/angular";
import { Card } from "src/app/interfaces";

@Component({
	selector: "app-more-options",
	templateUrl: "./more-options.component.html",
	styleUrls: ["./more-options.component.scss"],
})
export class MoreOptionsComponent implements OnInit {
	public isShowButton: boolean = true;
	public isShowOptions: boolean = false;
	public dataCard: Card = null;

	constructor(
		private navParams: NavParams,
		private popoverCtrl: PopoverController
	) {}

	ngOnInit() {
		this.dataCard = this.navParams.get("data");
	}

	onShowMore(): void {
		this.isShowButton = false;
		this.isShowOptions = true;
	}
}
