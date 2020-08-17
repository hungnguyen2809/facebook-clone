import { Injectable } from '@angular/core';
import { Notifications } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataNotificationsService {
  private dataNotificattions: Notifications[] = [];

  constructor() { 
    this.dataNotificattions = [
      {
        id: 1,
        img: '../../../assets/imgs/Teacher.png',
        content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga natus dicta voluptas in distinctio, 
                  veritatis ullam quod consequuntur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga natus dicta 
                  voluptas in distinctio, veritatis ullam quod consequuntur`,
        type: 1,
        time: 30,
        status: false
      },
      {
        id: 2,
        img: '../../../assets/imgs/Teacher.png',
        content: 'Hoàng đã bình luận về ảnh của bạn',
        type: 2,
        time: 100,
        status: true
      },
      {
        id: 3,
        img: '../../../assets/imgs/Teacher.png',
        content: 'Long đã thích ảnh của bạn',
        type: 3,
        time: 4000,
        status: true
      },
      {
        id: 4,
        img: '../../../assets/imgs/Teacher.png',
        content: 'Nguyễn Tiến Thành và Nguyễn Văn Tráng đã có bồ, 2 bạn đều học chung cùng lớp và tiến tới sáng năm.',
        type: 4,
        time: 120,
        status: false
      },
      {
        id: 5,
        img: '../../../assets/imgs/Teacher.png',
        content: 'Nguyễn Tiến Thành đã đăng trong nhóm Hội Những Người Đã Có Người Yêu',
        type: 5,
        time: 10,
        status: false
      }
    ];
  }

  getAllDataNotifi(){
    return this.dataNotificattions;
  }
}
