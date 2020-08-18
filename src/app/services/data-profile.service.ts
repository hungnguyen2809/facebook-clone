import { Injectable } from '@angular/core';
import { Profile, ButtonChip, Card } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataProfileService {
  private idProfile: number;
  private btnChips: ButtonChip[] = [];
  private listFriends: Profile[] = [];
  private mapfriends = new Map();

  constructor() { 
    this.btnChips = [
			{
				icon: "images",
				name: "Ảnh",
				height: 90,
			},
			{
				icon: "star-half",
				name: "Sự kiện trong đời",
				height: 190,
			},
			{
				icon: "musical-notes",
				name: "Âm nhạc",
				height: 120,
			},
			{
				icon: "help-circle",
				name: "Bạn có biết",
				height: 140,
			},
    ];
    
    this.listFriends = [
      {
        id: 1111,
        nameUser: 'Nguyễn Tiến Thành',
        subName: 'Hoa rơi của phật, vạn sự tùy duyên',
        avatar: 'https://i.imgur.com/vfHjMCH.jpg',
        background: 'https://i.imgur.com/9BNGpKi.jpeg',
        numberFriend: 101,
        abouts: [
          {
            type: 'school',
            value: 'Đại học Giao thông vận tải'
          },
          {
            type: 'live',
            value: 'Hà Nam'
          },
          {
            type: 'work',
            value: 'Vườn chuối Hà Nam'
          },
          {
            type: 'married',
            value: 'Đã có người yêu'
          },
          {
            type: 'follow',
            value: '100'
          },
        ],
        imagesAbout: [
          'https://i.imgur.com/BZjVmsk.jpg',
          'https://i.imgur.com/jKLHLNA.jpg',
          'https://i.imgur.com/tKgfSP2.jpg',
          'https://i.imgur.com/obhqDB8.jpeg',
          'https://i.imgur.com/0AgrTaA.jpeg',
          'https://i.imgur.com/AvKE7zh.jpeg'
        ],
        friends: [2222, 3333, 5555, 6666, 7777],
        posts: [
          {
            id: 1,
            typeCard: 1,
            avartar: 'https://i.imgur.com/vfHjMCH.jpg',
            nameUser: 'Nguyễn Tiến Thành',
            titleCard: 'Đã cập nhật ảnh đại diện của anh ấy.',
            nameGroup: '',
            content: 'Chào mọi người mình là Thành',
            time: 12000,
            typePrivacy: 'pu',
            attachments: [
              {
                type: 'img',
                url: 'https://i.imgur.com/vfHjMCH.jpg'
              }
            ],
            numberLike: 25,
            isLike: true,
            numberComment: 15,
            numberShare: 1,
            statusAction: 1
          },
          {
            id: 2,
            typeCard: 2,
            avartar: 'https://i.imgur.com/vfHjMCH.jpg',
            nameUser: 'Nguyễn Tiến Thành',
            titleCard: '',
            nameGroup: '',
            content: 'Chào mọi người mình là Thành',
            time: 2000,
            typePrivacy: 'fr',
            attachments: [
              {
                type: 'img',
                url: 'https://i.imgur.com/JrJjUlo.jpeg'
              },
              {
                type: 'video',
                url: 'https://i.imgur.com/luGHnMy.mp4'
              }
            ],
            numberLike: 30,
            isLike: true,
            numberComment: 2,
            numberShare: 0,
            statusAction: 1
          },
          {
            id: 3,
            typeCard: 2,
            avartar: 'https://i.imgur.com/vfHjMCH.jpg',
            nameUser: 'Nguyễn Tiến Thành',
            titleCard: '',
            nameGroup: '',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
            time: 30000,
            typePrivacy: 'fr',
            attachments: [
              {
                type: 'video',
                url: 'https://i.imgur.com/Ntl7A4X.mp4'
              },
              {
                type: 'img',
                url: 'https://i.imgur.com/X4kMClH.jpeg'
              },
              {
                type: 'img',
                url: 'https://i.imgur.com/zuDrRGs.jpg'
              }
            ],
            numberLike: 10,
            isLike: true,
            numberComment: 5,
            numberShare: 0,
            statusAction: 1
          },
          {
            id: 4,
            typeCard: 2,
            avartar: 'https://i.imgur.com/vfHjMCH.jpg',
            nameUser: 'Nguyễn Tiến Thành',
            titleCard: '',
            nameGroup: '',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            time: 1205,
            typePrivacy: '',
            attachments: [
              {
                type: 'img',
                url: 'https://i.imgur.com/mxKb1GX.jpg'
              },
              {
                type: 'video',
                url: 'https://i.imgur.com/sz6330O.mp4'
              },
              {
                type: 'video',
                url: 'https://i.imgur.com/QVFYyjg.mp4'
              },
              {
                type: 'img',
                url: 'https://i.imgur.com/Hx9bd1u.jpg'
              }
            ],
            numberLike: 12,
            isLike: true,
            numberComment: 1,
            numberShare: 0,
            statusAction: 1
          },
          {
            id: 5,
            typeCard: 2,
            avartar: 'https://i.imgur.com/vfHjMCH.jpg',
            nameUser: 'Nguyễn Tiến Thành',
            titleCard: '',
            nameGroup: '',
            content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
            time: 22000,
            typePrivacy: 'pu',
            attachments: [
              {
                type: 'img',
                url: 'https://i.imgur.com/MtHNBId.jpg'
              }
            ],
            numberLike: 22,
            isLike: true,
            numberComment: 5,
            numberShare: 0,
            statusAction: 1
          },
        ]
      },
      {
        id: 2222,
        nameUser: 'Nguyễn Văn Tráng',
        subName: 'Mãi là của C',
        avatar: 'https://i.imgur.com/CfhGDGJ.jpg',
        background: 'https://i.imgur.com/9BNGpKi.jpeg',
        numberFriend: 111,
        abouts: [
          {
            type: 'school',
            value: 'Đại học Giao thông vận tải'
          },
          {
            type: 'live',
            value: 'Nam Định'
          },
          {
            type: 'work',
            value: 'Núi Quất Lam'
          },
        ],
        imagesAbout: [
          'https://i.imgur.com/BZjVmsk.jpg',
          'https://i.imgur.com/jKLHLNA.jpg',
          'https://i.imgur.com/tKgfSP2.jpg',
          'https://i.imgur.com/obhqDB8.jpeg',
          'https://i.imgur.com/0AgrTaA.jpeg',
          'https://i.imgur.com/AvKE7zh.jpeg'
        ],
        friends: [1111, 3333, 5555, 6666, 7777],
        posts: [
          {
            id: 1,
            typeCard: 2,
            avartar: 'https://i.imgur.com/CfhGDGJ.jpg',
            nameUser: 'Nguyễn Văn Tráng',
            titleCard: '',
            nameGroup: '',
            content: 'Chào mọi người OK OK nhá. Mạnh tay chia sẻ lên.',
            time: 12000,
            typePrivacy: 'pu',
            attachments: [
              {
                type: 'img',
                url: 'https://i.imgur.com/vfHjMCH.jpg'
              }
            ],
            numberLike: 10000,
            isLike: true,
            numberComment: 20000,
            numberShare: 1000000,
            statusAction: 1
          },
        ]
      },
      {
        id: 3333,
        nameUser: 'Nguyễn Văn Hùng',
        subName: 'Vui vẻ hòa đồng',
        avatar: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-1/p160x160/55882048_1110466989141037_3584556447993692160_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=mIgCQMmyn7UAX__qWF2&_nc_ht=scontent.fhan3-3.fna&_nc_tp=6&oh=4fdfddf303921c34cf32158dd887c9cc&oe=5F561964',
        background: 'https://i.imgur.com/9BNGpKi.jpeg',
        numberFriend: 234,
        abouts: [
          {
            type: 'school',
            value: 'Đại học Giao thông vận tải'
          },
          {
            type: 'live',
            value: 'Hà Nội'
          },
          {
            type: 'work',
            value: 'Mobile'
          },
          {
            type: 'link',
            value: 'github.com/hungnguyen2809'
          },
          {
            type: 'follow',
            value: '1.000.000.000'
          }
        ],
        imagesAbout: [
          'https://i.imgur.com/BZjVmsk.jpg',
          'https://i.imgur.com/jKLHLNA.jpg',
          'https://i.imgur.com/tKgfSP2.jpg',
          'https://i.imgur.com/obhqDB8.jpeg',
          'https://i.imgur.com/0AgrTaA.jpeg',
          'https://i.imgur.com/AvKE7zh.jpeg'
        ],
        friends: [1111, 2222, 5555, 6666, 7777],
        posts: [
          {
            id: 1,
            typeCard: 2,
            avartar: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-1/p160x160/55882048_1110466989141037_3584556447993692160_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=mIgCQMmyn7UAX__qWF2&_nc_ht=scontent.fhan3-3.fna&_nc_tp=6&oh=4fdfddf303921c34cf32158dd887c9cc&oe=5F561964',
            nameUser: 'Nguyễn Văn Hùng',
            titleCard: '',
            nameGroup: '',
            content: `Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            `,
            time: 15000,
            typePrivacy: 'pu',
            attachments: [
              {
                type: 'img',
                url: 'https://i.imgur.com/vfHjMCH.jpg'
              }
            ],
            numberLike: 10000,
            isLike: true,
            numberComment: 20000,
            numberShare: 1000000,
            statusAction: 1
          },
        ]
      },
      {
        id: 5555,
        nameUser: 'Nguyễn Duy Tùng',
        subName: 'Mua hành LOL',
        avatar: 'https://i.imgur.com/T5JnQF2.jpg',
        background: 'https://i.imgur.com/9BNGpKi.jpeg',
        numberFriend: 1000,
        abouts: [
          {
            type: 'school',
            value: 'Đại học Giao thông vận tải'
          },
          {
            type: 'live',
            value: 'Hà Nội'
          },
        ],
        imagesAbout: [
          'https://i.imgur.com/BZjVmsk.jpg',
          'https://i.imgur.com/jKLHLNA.jpg',
          'https://i.imgur.com/tKgfSP2.jpg',
          'https://i.imgur.com/obhqDB8.jpeg',
          'https://i.imgur.com/0AgrTaA.jpeg',
          'https://i.imgur.com/AvKE7zh.jpeg'
        ],
        friends: [1111, 2222, 3333, 6666, 7777],
        posts: [
          {
            id: 1,
            typeCard: 2,
            avartar: 'https://i.imgur.com/T5JnQF2.jpg',
            nameUser: 'Nguyễn Duy Tùng',
            titleCard: '',
            nameGroup: '',
            content: ``,
            time: 5000,
            typePrivacy: 'pr',
            attachments: [
              {
                type: 'img',
                url: 'https://i.imgur.com/vfHjMCH.jpg'
              }
            ],
            numberLike: 1000,
            isLike: false,
            numberComment: 10000,
            numberShare: 1000,
            statusAction: 2
          },
        ]
      },
      {
        id: 6666,
        nameUser: 'Nguyễn Thị AA',
        subName: '',
        avatar: 'https://i.imgur.com/PfZ6kcm.jpg',
        background: 'https://i.imgur.com/9BNGpKi.jpeg',
        numberFriend: 1,
        abouts: [
        ],
        imagesAbout: [
          'https://i.imgur.com/BZjVmsk.jpg',
        ],
        friends: [1111, 2222, 3333, 5555, 7777],
        posts: [
          {
            id: 1,
            typeCard: 2,
            avartar: 'https://i.imgur.com/PfZ6kcm.jpg',
            nameUser: 'Nguyễn Thị AA',
            titleCard: '',
            nameGroup: '',
            content: `Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            `,
            time: 25000,
            typePrivacy: 'pu',
            attachments: [
              {
                type: 'img',
                url: 'https://i.imgur.com/vfHjMCH.jpg'
              }
            ],
            numberLike: 100,
            isLike: false,
            numberComment: 200,
            numberShare: 100,
            statusAction: 5
          },
        ]
      },
      {
        id: 7777,
        nameUser: 'Trần Giần',
        subName: 'I have a gun',
        avatar: 'https://i.imgur.com/T5JnQF2.jpg',
        background: 'https://i.imgur.com/9BNGpKi.jpeg',
        numberFriend: 10,
        abouts: [
          {
            type: 'work',
            value: 'Cố vấn quân sự US'
          },
        ],
        imagesAbout: [
          'https://i.imgur.com/BZjVmsk.jpg',
          'https://i.imgur.com/jKLHLNA.jpg',
        ],
        friends: [1111, 2222, 3333, 5555, 6666],
        posts: [
          {
            id: 1,
            typeCard: 2,
            avartar: 'https://i.imgur.com/T5JnQF2.jpg',
            nameUser: 'Trần Giần',
            titleCard: '',
            nameGroup: '',
            content: `Why do we use it?`,
            time: 15000,
            typePrivacy: 'pu',
            attachments: [
              {
                type: 'img',
                url: 'https://i.imgur.com/vfHjMCH.jpg'
              }
            ],
            numberLike: 10000,
            isLike: false,
            numberComment: 20000,
            numberShare: 1000000,
            statusAction: 4
          },
        ]
      },
    ];

    this.idProfile = 1111;
    this.initMapProfile();
  }

  initMapProfile(){
    this.listFriends.forEach((element) => {
      this.mapfriends.set(element.id, element);
    });
  }

  getProfile(id: number){
    return this.mapfriends.get(id);
  }

  getProfileCurrent(){
    return this.mapfriends.get(this.idProfile);
  }

  getBtnChips(){
    return this.btnChips;
  }

  addProfile(id: number, value: Card){
    value.id = id;
    let profile = this.getProfile(this.idProfile);
    profile.posts.unshift(value);
  }
}
