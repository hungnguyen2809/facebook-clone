import { Component, OnInit } from '@angular/core';
import { Notifications } from '../../interfaces';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public listNotifications: Notifications[] = [];

  constructor() { }

  ngOnInit() {
    this.listNotifications = [
      {
        img: '../../../assets/imgs/avatar.png',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga natus dicta voluptas in distinctio, veritatis ullam quod consequuntur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga natus dicta voluptas in distinctio, veritatis ullam quod consequuntur',
        type: 1,
        time: 30,
        status: false
      },
      {
        img: '../../../assets/imgs/avatar.png',
        content: 'Hoàng đã bình luận về ảnh của bạn',
        type: 2,
        time: 100,
        status: true
      },
      {
        img: '../../../assets/imgs/avatar.png',
        content: 'Long đã thích ảnh của bạn',
        type: 3,
        time: 4000,
        status: true
      },
      {
        img: '../../../assets/imgs/avatar.png',
        content: 'Nguyễn Tiến Thành và Nguyễn Văn Tráng đã có bồ, 2 bạn đều học chung cùng lớp và tiến tới sáng năm.',
        type: 4,
        time: 120,
        status: false
      },
      {
        img: '../../../assets/imgs/avatar.png',
        content: 'Nguyễn Tiến Thành đã đăng trong nhóm Hội Những Người Đã Có Người Yêu',
        type: 5,
        time: 10,
        status: false
      }
    ];
  }

}
