import { ProcessAllService } from "src/app/services/process-all.service";
import { Component, OnInit, ElementRef } from "@angular/core";
import { ModalController, AlertController, LoadingController } from "@ionic/angular";
import { ActionsCrateStatusPage } from "../actions-crate-status/actions-crate-status.page";
import { Card, Profile } from 'src/app/interfaces';
import { DataProfileService } from 'src/app/services/data-profile.service';
import { DataHomeService } from 'src/app/services/data-home.service';

@Component({
	selector: "app-create-status",
	templateUrl: "./create-status.page.html",
	styleUrls: ["./create-status.page.scss"],
})
export class CreateStatusPage implements OnInit {
	public profile: Profile;
	public privacysMap = new Map();
	public albumsMap = new Map();
	public privacyName: string = "";
	public privacyIcon: string = "";
	public albumName: string = "";
	public albumIcon: string = "";
	public disabledSubmit: boolean = true;
	private listAlbum: any[] = [];
	private albumsAlert: any[] = [];
	private idModalActionsCreateStatus: string = "";
	private isLifeModalActionsCreateStatus: boolean = false;
	private privacyChoose: string = '';

	constructor(
		private modalCtrl: ModalController,
		private alertCtrl: AlertController,
		private processService: ProcessAllService,
		private dataProfileService: DataProfileService,
		private dataHomeService: DataHomeService,
		private loadingCtrl: LoadingController
	) {}

	ngOnInit() {
		this.initPrivacy();
		
		this.listAlbum = ["Album Đi chơi", "Album Công việc", "Album Bán hàng"];
		this.initAlbum();

		this.onShowMoreActionsCreate();
		this.profile = this.dataProfileService.getProfileCurrent();
	}

	initPrivacy(): void{
		this.privacysMap.set("pb", {
			name: "Công khai",
			icon: "fas fa-globe-asia fa-sm",
		});
		this.privacysMap.set("pr", {
			name: "Chỉ mình tôi",
			icon: "fas fa-lock fa-sm",
		});
		this.privacysMap.set("fr", {
			name: "Bạn bè",
			icon: "fas fa-user-friends fa-sm",
		});
		this.privacyName = this.privacysMap.get("pb").name;
		this.privacyIcon = this.privacysMap.get("pb").icon;
		this.privacyChoose = 'pb';

	}

	onDismiss(): void {
		if (this.isLifeModalActionsCreateStatus) {
			this.modalCtrl.dismiss(null, null, this.idModalActionsCreateStatus);
		}

		setTimeout(() => {
			this.modalCtrl.dismiss(null, null, this.processService.idCreateStatus);
		}, 200);
	}

	async onShowPrivacy() {
		let promptPrivacy = await this.alertCtrl.create({
			subHeader: "Ai có thể xem bài viết của bạn",
			animated: true,
			translucent: true,
			keyboardClose: true,
			inputs: [
				{
					value: "pb",
					type: "radio",
					label: "Công khai",
					checked: true,
					handler: () => {
						this.privacyName = this.privacysMap.get("pb").name;
						this.privacyIcon = this.privacysMap.get("pb").icon;
						this.privacyChoose = 'pb';
					},
				},
				{
					value: "fr",
					type: "radio",
					label: "Bạn bè",
					handler: () => {
						this.privacyName = this.privacysMap.get("fr").name;
						this.privacyIcon = this.privacysMap.get("fr").icon;
						this.privacyChoose = 'fr';
					},
				},
				{
					value: "pr",
					type: "radio",
					label: "Chỉ mình tôi",
					handler: () => {
						this.privacyName = this.privacysMap.get("pr").name;
						this.privacyIcon = this.privacysMap.get("pr").icon;
						this.privacyChoose = 'pr';
					},
				},
			],
		});
		await promptPrivacy.present();
	}

	initAlbum(): void {
		this.albumsMap.set("ab", { name: "Album", icon: "fas fa-plus fa-sm" });
		for (let i = 0; i < this.listAlbum.length; i++) {
			this.albumsMap.set(`ab${i + 1}`, {
				name: this.listAlbum[i],
				icon: "fas fa-book fa-sm",
			});

			this.albumsAlert.push({
				value: `ab${i + 1}`,
				type: "radio",
				label: this.listAlbum[i],
				handler: () => {
					this.albumName = this.albumsMap.get(`ab${i + 1}`).name;
					this.albumIcon = this.albumsMap.get(`ab${i + 1}`).icon;
				},
			});
		}
		this.albumName = this.albumsMap.get("ab").name;
		this.albumIcon = this.albumsMap.get("ab").icon;
	}

	async onShowAlbum() {
		let promptAlbum = await this.alertCtrl.create({
			subHeader: "Chọn album",
			inputs: this.albumsAlert,
			buttons: [
				{
					text: "Tạo mới Album",
					handler: () => {},
					cssClass: "btnCreateAlbum",
				},
			],
		});
		await promptAlbum.present();
	}

	onSubmit(event): void {
		let value = event.target.value;
		if (value.trim().length > 0) {
			this.disabledSubmit = false;
		} else {
			this.disabledSubmit = true;
		}
	}

	onDisabledActions(): void {
		if(this.isLifeModalActionsCreateStatus === true) {
			this.isLifeModalActionsCreateStatus = false;
			this.modalCtrl.dismiss(null, null, this.idModalActionsCreateStatus);
		}
	}

	onShowMoreActionsCreate() {
		if(this.isLifeModalActionsCreateStatus === false){
			this.modalCtrl
				.create({
					component: ActionsCrateStatusPage,
					keyboardClose: true,
					cssClass: "actions-create-status",
				})
				.then((obj) => {
					obj.present();
					this.idModalActionsCreateStatus = obj.id;
					this.isLifeModalActionsCreateStatus = true;
				});
		}
		
		if(this.isLifeModalActionsCreateStatus === true){
			this.modalCtrl.dismiss(null, null, this.idModalActionsCreateStatus);
			this.isLifeModalActionsCreateStatus = false;
		}
	}

	async onPost(content: string){
		let post: Card = {
			id: null,
			nameUser: this.profile.nameUser,
			avartar: this.profile.avatar,
			typeCard: 2,
			titleCard: '',
			nameGroup: '',
			content: content,
			time: 0,
			typePrivacy: this.privacyChoose,
			attachments: [],
			numberLike: 0,
			numberComment: 0,
			isLike: false,
			numberShare: 0,
			statusAction: 1
		}

		this.dataHomeService.addStatus(this.processService.getIDforHomeAndProfile(), post);
		this.dataProfileService.addProfile(this.processService.getIDforHomeAndProfile(), post);

		let createState = await this.loadingCtrl.create({
			animated: true,
			backdropDismiss: false,
			message: 'Vui lòng đợi'
		});
		await createState.present();

		setTimeout(()=>{
			this.onDismiss();
			createState.dismiss();
		}, 200);
	}
}
