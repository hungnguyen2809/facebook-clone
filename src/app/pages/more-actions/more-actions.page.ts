import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-more-actions",
	templateUrl: "./more-actions.page.html",
	styleUrls: ["./more-actions.page.scss"],
})
export class MoreActionsPage implements OnInit {
	public isShowButton: boolean;
	public isShowOptions: boolean;

	constructor() {}

	ngOnInit() {
		this.isShowButton = true;
		this.isShowOptions = false;
	}

	onShowMore(): void {
    this.isShowButton = false;
    this.isShowOptions = true;
  }
}
