import { Component, OnInit } from "@angular/core";
import { Notifications } from "../../interfaces";
import { DataNotificationsService } from "src/app/services/data-notifications.service";

@Component({
	selector: "app-notifications",
	templateUrl: "./notifications.page.html",
	styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage implements OnInit {
	public listNotifications: Notifications[] = [];

	constructor(private dataNotifiService: DataNotificationsService) {}

	ngOnInit() {
		this.listNotifications = this.dataNotifiService.getAllDataNotifi();
	}

	onionRefresh(event): void {
		setTimeout(() => {
			event.target.complete();
		}, 1000);
	}
}
