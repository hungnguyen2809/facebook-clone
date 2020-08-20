import { NavController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from "@angular/core";
import { HomePage } from '../home/home.page';
import { GroupPage } from '../group/group.page';
import { WatchPage } from '../watch/watch.page';
import { NotificationsPage } from '../notifications/notifications.page';
import { MenuPage } from '../menu/menu.page';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
	selector: "app-index",
	templateUrl: "./index.page.html",
	styleUrls: ["./index.page.scss"],
})
export class IndexPage implements OnInit {
  homePage = HomePage;
  groupPage = GroupPage;
  watchPage = WatchPage;
  notificationsPage = NotificationsPage;
  menuPage = MenuPage;

  @ViewChild('content', { static: false}) content: Content;

	constructor(
    private navCtrl: NavController
  ) {}

	ngOnInit() {}

  onSearch(){
    this.navCtrl.navigateForward('search');
  }
}
