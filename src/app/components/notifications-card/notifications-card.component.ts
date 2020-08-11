import { Component, OnInit, Input } from "@angular/core";
import { Notifications, Icon } from './../../interfaces';
import { ProcessAllService } from './../../services/process-all.service';

@Component({
	selector: "notifications-card",
	templateUrl: "./notifications-card.component.html",
	styleUrls: ["./notifications-card.component.scss"],
})
export class NotificationsCardComponent implements OnInit {
	@Input() notifi: Notifications;
	public typeIcon: Icon;

	constructor(public processService: ProcessAllService) {}

	ngOnInit() {
		this.typeIcon = this.processService.getIconNotifi(this.notifi.type);
	}

	onReadNotifi(): void{
		if(this.notifi.status == false){
			this.notifi.status = true;
		}
	}
}
