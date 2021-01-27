import { Injectable } from '@angular/core';
import { Card, ButtonChip } from '../interfaces';

interface Group{
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataGroupService {
  private dataGroup: Card[] = [];
  public btnChips: ButtonChip[] = [];
  public groups: Group[] = [];

  //1. trạng thái có tiêu đề,
		//2. trạng thái không có tiêu đề,
		//3. Tin trong group

		//statusAction
		// 1. bình thường đủ like, comment, share,
		// 2. có like, share,
		// 3. có like comment,
		// 4. chỉ có like
		// 5. vô hiệu hóa tính năng

  constructor() {
    this.btnChips = [
      {
        icon: 'people',
        name: 'Nhóm của bạn',
        height: 160
      },
      {
        icon: 'compass',
        name: 'Khám phá',
        height: 130
      },
      {
        icon: 'add-circle',
        name: 'Tạo mới',
        height: 120
      },
      {
        icon: 'settings',
        name: 'Cài đặt',
        height: 110
      }
    ];

    this.groups = [
      {
        name: 'Thành và Những người bạn',
        image: 'https://i.imgur.com/diwZK6u.jpg'
      },
      {
        name: 'CNTT 2-K58',
        image: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/68418735_2381721258710343_2716045689158107136_n.jpg?_nc_cat=106&_nc_sid=825194&_nc_ohc=10m42ixONQoAX9jFA4K&_nc_ht=scontent-hkg4-1.xx&oh=c15452faaf464480bf6481da920acda3&oe=5F5806AD'
      },
      {
        name: 'Hội người lái máy bay',
        image: 'https://i.imgur.com/HsvdEgY.jpg'
      },
      {
        name: 'Hội người chưa biết nấu cơm',
        image: 'https://s.meta.com.vn/img/thumb.ashx/200x200x95/Data/image/2019/04/16/noi-com-dien-midea-mr-cm07nb-na.jpg'
      },
      {
        name: 'Hội rich kid Hà Nam',
        image: 'https://i.imgur.com/Si2WqmC.jpg'
      }
    ];

    this.dataGroup = [
      {
        id: 1111,
				typeCard: 3,
				avartar: 'https://i.imgur.com/vfHjMCH.jpg',
				nameUser: 'Nguyễn Tiến Thành',
				titleCard: '',
				nameGroup: 'Thành và Những người bạn',
				content: 'Mình nè các bạn. Tối nay livestream lúc 19h30 nha.',
				time: 10,
				typePrivacy: '',
				attachments: [
					{
						type: 'img',
						url: 'https://i.imgur.com/vfHjMCH.jpg'
					}
				],
				numberLike: 100,
				isLike: false,
				numberComment: 30,
				numberShare: 150,
				statusAction: 1
			},
			{
        id: 2222,
				typeCard: 3,
				avartar: 'https://i.imgur.com/CfhGDGJ.jpg',
				nameUser: 'Nguyễn Văn Tráng',
				titleCard: '',
				nameGroup: 'Hội người chưa biết nấu cơm',
				content: 'Chào cả nhà nhá.... Ok ok nhá. Ai chỉ mình nấu cơm với nha.',
				time: 6000,
				typePrivacy: '',
				attachments: [
					{
						type: 'img',
						url: 'https://i.imgur.com/OHF3jkZ.png'
					},
					{
						type: 'img',
						url: 'https://i.imgur.com/T5JnQF2.jpg'
					},
					{
						type: 'img',
						url: 'https://i.imgur.com/PfZ6kcm.jpg',
					}
				],
				numberLike: 100,
				isLike: false,
				numberComment: 50,
				numberShare: 10,
				statusAction: 1
			},
			{
        id: 3333,
				typeCard: 3,
				avartar: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-1/p160x160/55882048_1110466989141037_3584556447993692160_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=mIgCQMmyn7UAX__qWF2&_nc_ht=scontent.fhan3-3.fna&_nc_tp=6&oh=4fdfddf303921c34cf32158dd887c9cc&oe=5F561964',
				nameUser: 'Nguyễn Văn Hùng',
				titleCard: '',
				nameGroup: 'CNTT 2-K58',
				content: `Chào các bạn.`,
				time: 500,
				typePrivacy: '',
				attachments: [
					{
						type: 'video',
						url: 'https://i.imgur.com/lOZd5FV.mp4'
					},
					{
						type: 'img',
						url: 'https://i.imgur.com/vfHjMCH.jpg'
					},
					{
						type: 'img',
						url: 'https://i.imgur.com/PfZ6kcm.jpg'
					},
					{
						type: 'img',
						url: 'https://i.imgur.com/T5JnQF2.jpg'
					},
					{
						type: 'img',
						url: 'https://i.imgur.com/T5JnQF2.jpg'
					},
					{
						type: 'img',
						url: 'https://i.imgur.com/Vi1ihEw.jpg'
					},
					{
						type: 'img',
						url: 'https://i.imgur.com/vfHjMCH.jpg'
					}
				],
				numberLike: 7999,
				isLike: false,
				numberComment: 2000,
				numberShare: 10000,
				statusAction: 1
			},
    ];
  }

  getAllDataGroup(){
    return this.dataGroup;
  }

  getAllSuggestActionsBtn(){
    return this.btnChips;
  }

  getAllCurrentJoinGroup(){
    return this.groups;
  }
}
