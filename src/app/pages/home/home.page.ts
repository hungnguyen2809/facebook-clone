import { ProcessAllService } from 'src/app/services/process-all.service';
import { Component, OnInit } from "@angular/core";
import { PopoverController, ActionSheetController, ModalController } from "@ionic/angular";
import { Story, Card, Profile } from "./../../interfaces";
import { Router, NavigationExtras } from "@angular/router";
import { CreateStatusPage } from '../create-status/create-status.page';
import { DataHomeService } from 'src/app/services/data-home.service';
import { DataProfileService } from 'src/app/services/data-profile.service';

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
	public profileUser: Profile;
	public listStory: Story[] = [];
	public listActive: string[] = [];
	public listStatusHome: Card[] = [];

	constructor(
		public popoverCtrl: PopoverController,
		public actionsSheetCtrl: ActionSheetController,
		private router: Router,
		private modalCtrl: ModalController,
		private processService: ProcessAllService,
		private dataHomesService: DataHomeService,
		public dataProfileService: DataProfileService
	) {}

	ngOnInit() {
		this.listStory = this.dataHomesService.getAllStory();
		this.listActive = this.dataHomesService.getAllPersonActive();
		this.listStatusHome = this.dataHomesService.getAllStatus();
		this.profileUser = this.dataProfileService.getProfileCurrent();
	}

	onProfile(): void {
		let idProfileNavigationExtras: NavigationExtras = {
			queryParams: {
				id: JSON.stringify(this.profileUser.id)
			}
		};
		this.router.navigate(["profile"], idProfileNavigationExtras);
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
