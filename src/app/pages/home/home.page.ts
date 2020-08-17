import { ProcessAllService } from 'src/app/services/process-all.service';
import { Component, OnInit } from "@angular/core";
import { PopoverController, ActionSheetController, ModalController } from "@ionic/angular";
import { Story, Card } from "./../../interfaces";
import { Router } from "@angular/router";
import { CreateStatusPage } from '../create-status/create-status.page';
import { DataHomeService } from 'src/app/services/data-home.service';

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
	public avatar: string = "https://i.imgur.com/vfHjMCH.jpg";

	public listStory: Story[] = [];
	public listActive: string[] = [];
	public listStatusHome: Card[] = [];

	constructor(
		public popoverCtrl: PopoverController,
		public actionsSheetCtrl: ActionSheetController,
		private routerService: Router,
		private modalCtrl: ModalController,
		private processService: ProcessAllService,
		private dataHomesService: DataHomeService,
	) {}

	ngOnInit() {
		this.listStory = this.dataHomesService.getAllStory();
		this.listActive = this.dataHomesService.getAllPersonActive();
		this.listStatusHome = this.dataHomesService.getAllStatus();
	}

	onProfile(): void {
		this.routerService.navigateByUrl("profile");
	}

	onCreateStatus(){
		this.modalCtrl.create({
			component: CreateStatusPage,
			animated: true,
			keyboardClose: true,
			mode: 'ios',
			backdropDismiss: false,
			cssClass: 'modalStatus',
		})
		.then(obj =>{
			this.processService.idCreateStatus = obj.id;
			obj.present();
		});
	}
}
