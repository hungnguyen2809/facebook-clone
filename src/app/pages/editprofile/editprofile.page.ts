import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(public nav:NavController) { }

  ngOnInit() {
  }
  back(){
    this.nav.navigateBack('profile')
  }
}
