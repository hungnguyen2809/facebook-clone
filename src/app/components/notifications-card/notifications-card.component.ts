import { Notifications } from "./../../interfaces";
import { Component, OnInit, Input } from "@angular/core";

export interface IconNotifi {
	type: number;
	color: string;
	class: string;
}

@Component({
	selector: "notifications-card",
	templateUrl: "./notifications-card.component.html",
	styleUrls: ["./notifications-card.component.scss"],
})
export class NotificationsCardComponent implements OnInit {
	@Input() notifi: Notifications;
	public content: string = "";
	public time: string = "";
	public typeIcon: IconNotifi;

	public listIcons: IconNotifi[] = [];

	constructor() {}

	ngOnInit() {
		this.listIcons = [
			{ type: 1, color: "#2ed573", class: "fas fa-comment" }, //comment
			{ type: 2, color: "#3867d6", class: "fas fa-thumbs-up" }, //like
			{ type: 3, color: "#2e86de", class: "fas fa-users" }, //group
			{ type: 4, color: "#fa8231", class: "fas fa-id-card-alt" }, //card
			{ type: 5, color: "#eb3b5a", class: "fas fa-heart" }, //heart tim
		];

		this.getIcon();
	}

	getContent(): string {
		let result = "";
		if (this.notifi.content.length < 130) {
			result = this.notifi.content;
		} else {
			result = this.notifi.content.substring(0, 130) + "...";
		}
		return result;
	}

	getTime(): string {
		let result = "";
		if (this.notifi.time < 60) {
			result = this.notifi.time + " giây trước";
		} else if (this.notifi.time < 3600) {
			let minutes = this.notifi.time / 60;
			result = Math.floor(minutes) + " phút trước";
		} else {
			let hour = this.notifi.time / 3600;
			result = Math.floor(hour) + " giờ trước";
		}
		return result;
	}

	getIcon(): void {
		for (let item of this.listIcons) {
			if (item.type === this.notifi.type) {
				this.typeIcon = item;
			}
		}
	}

	onReadNotifi(): void{
		if(this.notifi.status == false){
			this.notifi.status = true;
		}
	}
}
