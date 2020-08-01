import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-more-actions",
	templateUrl: "./more-actions.page.html",
	styleUrls: ["./more-actions.page.scss"],
})
export class MoreActionsPage implements OnInit {
	public isShowButton: boolean = false;
	public isOptions1: boolean = true;
	public isOptions2: boolean = true;

	constructor() {}

	ngOnInit() {}

	onShowMore(): void {
    this.isShowButton = true;
    this.isOptions1 = false;
    this.isOptions2 = false;
  }
}
