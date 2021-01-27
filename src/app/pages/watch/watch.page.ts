import { Component, OnInit } from "@angular/core";
import { PopoverController, ActionSheetController } from "@ionic/angular";
import { ButtonChip, VideoCard } from "./../../interfaces";
import { DataWatchService } from "src/app/services/data-watch.service";

@Component({
	selector: "app-watch",
	templateUrl: "./watch.page.html",
	styleUrls: ["./watch.page.scss"],
})
export class WatchPage implements OnInit {
	public btnChips: ButtonChip[] = [];
	public listVideoCard: VideoCard[] = [];

	constructor(
		public popoverCtrl: PopoverController,
		public actionsSheetCtrl: ActionSheetController,
		private dataWatch: DataWatchService
	) {}

	ngOnInit() {
		this.listVideoCard = this.dataWatch.getAllDataWatch();
		this.btnChips = this.dataWatch.getAllDataSuggetBtnChip();
	}
}
