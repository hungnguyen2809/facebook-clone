import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/interfaces";
import { ButtonChip } from "./../../interfaces";
import { DataGroupService } from "src/app/services/data-group.service";
@Component({
	selector: "app-group",
	templateUrl: "./group.page.html",
	styleUrls: ["./group.page.scss"],
})
export class GroupPage implements OnInit {
	public btnChips: ButtonChip[] = [];
	public groups: any[] = [];
	public listContentGroup: Card[] = [];

	constructor(private dataGroup: DataGroupService) {}

	ngOnInit() {
		this.listContentGroup = this.dataGroup.getAllDataGroup();
		this.groups = this.dataGroup.getAllCurrentJoinGroup();
		this.btnChips = this.dataGroup.getAllSuggestActionsBtn();
	}
}
