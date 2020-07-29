import { IonTabs } from '@ionic/angular';
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-index",
	templateUrl: "./index.page.html",
	styleUrls: ["./index.page.scss"],
})
export class IndexPage implements OnInit {
  public isActiveHome: boolean = false;
  public isActiveGroup: boolean = false;
  public isActiveWatch: boolean = false;
  public isActiveNotifi: boolean = false;
  public isActiveMenu: boolean = false;

	constructor() {}

	ngOnInit() {}

	onChangeTabs(tabsOptions: IonTabs): void {
    let currentTab = tabsOptions.getSelected();

    if(currentTab === 'home'){
      this.isActiveHome = true;
      this.isActiveGroup = false;
      this.isActiveWatch = false;
      this.isActiveNotifi = false;
      this.isActiveMenu = false;
    }

    if(currentTab === 'group'){
      this.isActiveHome = false;
      this.isActiveGroup = true;
      this.isActiveWatch = false;
      this.isActiveNotifi = false;
      this.isActiveMenu = false;
    }

    if(currentTab === 'watch'){
      this.isActiveHome = false;
      this.isActiveGroup = false;
      this.isActiveWatch = true;
      this.isActiveNotifi = false;
      this.isActiveMenu = false;
    }

    if(currentTab === 'notifications'){
      this.isActiveHome = false;
      this.isActiveGroup = false;
      this.isActiveWatch = false;
      this.isActiveNotifi = true;
      this.isActiveMenu = false;
    }

    if(currentTab === 'menu'){
      this.isActiveHome = false;
      this.isActiveGroup = false;
      this.isActiveWatch = false;
      this.isActiveNotifi = false;
      this.isActiveMenu = true;
    }
  }
}
