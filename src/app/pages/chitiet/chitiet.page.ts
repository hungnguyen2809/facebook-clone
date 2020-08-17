import { Card } from "./../../interfaces";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ProcessAllService } from "src/app/services/process-all.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-chitiet",
	templateUrl: "./chitiet.page.html",
	styleUrls: ["./chitiet.page.scss"],
})
export class ChitietPage implements OnInit {
	public data: Card;

	constructor(
		public aler: AlertController,
		public processService: ProcessAllService,
		private router: Router
	) {}

	ngOnInit() {
		if (this.router.getCurrentNavigation().extras.state) {
			this.data = this.router.getCurrentNavigation().extras.state.data;
		}
	}

	async phuhop() {
		const alert = await this.aler.create({
			header: "Radio",
			inputs: [
				{
					name: "Phù hợp nhất",
					type: "radio",
					label: "Radio 1",
					value: "value1",
					checked: true,
				},
				{
					name: "Mới nhất",
					type: "radio",
					label: "Radio 2",
					value: "value2",
				},
				{
					name: "Tất cả bình luận",
					type: "radio",
					label: "Radio 3",
					value: "value3",
				},
			],
		});

		await alert.present();
	}

	onLike() {
		if (this.data.isLike) {
			this.data.numberLike = this.data.numberLike - 1;
			this.data.isLike = !this.data.isLike;
		} else {
			this.data.numberLike = this.data.numberLike + 1;
			this.data.isLike = !this.data.isLike;
		}
	}

	onComment() {}

	onShare() {}

	onMoreOptions() {}
}
