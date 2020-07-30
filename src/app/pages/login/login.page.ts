import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { endianness } from 'os';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public aler: AlertController) { }

  ngOnInit() {
  }
  
  async language(){
    const alert = await this.aler.create({
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Tiếng Việt',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio1',
          type: 'radio',
          label: '中国',
          value: 'value1',
          
        },
        {
          name: 'radio1',
          type: 'radio',
          label: 'English',
          value: 'value1',
          
        },
        {
          name: 'radio1',
          type: 'radio',
          label: '日本語',
          value: 'value1',
          
        },
      ],
    });
    await alert.present();
  }
}
