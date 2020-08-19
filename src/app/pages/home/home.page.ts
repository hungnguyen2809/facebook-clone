import { ProcessAllService } from 'src/app/services/process-all.service';
import { Component, OnInit } from "@angular/core";
import { PopoverController, ActionSheetController, ModalController, NavController } from "@ionic/angular";
import { Story, Card, Profile } from "./../../interfaces";
import { CreateStatusPage } from '../create-status/create-status.page';
import { DataHomeService } from 'src/app/services/data-home.service';
import { DataProfileService } from 'src/app/services/data-profile.service';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';

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
		public dataProfileService: DataProfileService,
		private navCtrl: NavController,
		private modalCtrl: ModalController,
		private processService: ProcessAllService,
		private dataHomesService: DataHomeService,
	) {}

	ngOnInit() {
		this.listStory = this.dataHomesService.getAllStory();
		this.listActive = this.dataHomesService.getAllPersonActive();
		this.listStatusHome = this.dataHomesService.getAllStatus();
		this.profileUser = this.dataProfileService.getProfileCurrent();
	}

	onProfile(): void {
		this.navCtrl.navigateForward(`profile/${this.profileUser.id}`);
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
