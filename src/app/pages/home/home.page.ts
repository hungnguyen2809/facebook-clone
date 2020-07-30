import { MoreActionsPage } from './../more-actions/more-actions.page';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public popoverCtrl : PopoverController,
    public actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async onMoreOptions(){
    const showMoreOp = await this.popoverCtrl.create({
      component: MoreActionsPage,
      animated: true,
      translucent: true
    });
    return await showMoreOp.present();
    // const show = await this.actionSheetCtrl.create({
    //   animated: true,
    //   buttons: [
    //     {
    //       text: `Lưu video
    //       Thêm vào danh sách video đã lưu`,
    //       icon: 'bookmark',
    //       handler: () => {
    //         console.log(1);
    //       }
    //     }
    //   ]
    // });
    // return await show.present();
  }

}
