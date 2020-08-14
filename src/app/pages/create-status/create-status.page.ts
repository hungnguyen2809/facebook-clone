import { Component, OnInit } from "@angular/core";
import { ModalController, AlertController } from "@ionic/angular";


@Component({
	selector: "app-create-status",
	templateUrl: "./create-status.page.html",
	styleUrls: ["./create-status.page.scss"],
})
export class CreateStatusPage implements OnInit {
  public avatar: string = "https://i.imgur.com/vfHjMCH.jpg";
  public privacysMap = new Map();
  public albumsMap = new Map();
  public privacyName: string = '';
  public privacyIcon: string = '';
  public albumName: string = '';
  public albumIcon: string = '';
  public disabledSubmit: boolean = true;
  private listAlbum: any[] = [];
  private albumsAlert: any[] = [];

	constructor(
		private modalCtrl: ModalController,
		private alertCtrl: AlertController
	) {}

	ngOnInit() {
    this.privacysMap.set('pb', {name: 'Công khai', icon: 'fas fa-globe-asia fa-sm'});
    this.privacysMap.set('pr', {name: 'Chỉ mình tôi', icon: 'fas fa-lock fa-sm'});
    this.privacysMap.set('fr', {name: 'Bạn bè', icon: 'fas fa-user-friends fa-sm'});
    this.privacyName = this.privacysMap.get('pb').name;
    this.privacyIcon = this.privacysMap.get('pb').icon;

    this.listAlbum = ['Album 1', 'Album 2', 'Album 3'];
    this.initAlbum();
  }

	onDismiss(): void {
		this.modalCtrl.dismiss();
	}

	async onShowPrivacy() {
		let promptPrivacy = await this.alertCtrl.create({
			subHeader: "Ai có thể xem bài viết quả bạn",
			message: `Bài viết của bạn sẽ được hiển thị trong Bảng tin, trên trang cá nhân
      và trong kết quả tìm kiếm`,
			animated: true,
			backdropDismiss: false,
			translucent: true,
			keyboardClose: true,
			inputs: [
				{
					value: "pb",
					type: "radio",
          label: "Công khai",
          checked: true
				},
				{
					value: "fr",
					type: "radio",
					label: "Bạn bè",
				},
				{
					value: "pr",
					type: "radio",
					label: "Chỉ mình tôi",
				},
			],
			buttons: [
				{
          text: "Đồng ý",
					handler: (option) => {
						this.privacyName = this.privacysMap.get(option).name;
            this.privacyIcon = this.privacysMap.get(option).icon;
          },
				},
				{
					text: "Hủy bỏ",
					role: "cancel",
					handler: () => {},
				},
			],
		});

		await promptPrivacy.present();
  }

  initAlbum(): void {
    this.albumsMap.set('ab', {name: 'Album', icon: 'fas fa-plus fa-sm'});
    for(let i=0; i<this.listAlbum.length; i++){
      this.albumsMap.set(`ab${i+1}`, {name: this.listAlbum[i], icon: 'fas fa-book fa-sm'});
    }  
    this.albumName = this.albumsMap.get('ab').name;
    this.albumIcon = this.albumsMap.get('ab').icon;

    for(var[key, value] of this.albumsMap){
      this.albumsAlert.push(
        {
          value: key,
          type: 'radio',
          label: value.name
        }
      );
    }
  }

  async onShowAlbum(){
    let promptAlbum = await this.alertCtrl.create({
      subHeader: 'Chọn album',
      inputs: this.albumsAlert,
      buttons: [
        {
          text: 'Đồng ý',
          handler: () => {

          }
        },
        {
          text: 'Tạo mới',
          handler: () => {

          }
        },{
          text: 'Huỷ bỏ',
          handler: () => {

          }
        },
      ]
    });

    await promptAlbum.present();
  }
  
  onSubmit(event): void{
    let value = event.target.value;
    if(value.trim().length > 0){
      this.disabledSubmit = false;
    }
    else{
      this.disabledSubmit = true;
    }
  }
}
