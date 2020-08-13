import { Component, OnInit } from '@angular/core';
import { AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.page.html',
  styleUrls: ['./chitiet.page.scss'],
})
export class ChitietPage implements OnInit {

  constructor(public aler: AlertController) { }

  ngOnInit() {
  }
  async phuhop(){
    const alert = await this.aler.create({
      header: 'Radio',
      inputs: [
        {
          name: 'Phù hợp nhất',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'Mới nhất',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'Tất cả bình luận',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
      ]
    });

    await alert.present();
  }

}
