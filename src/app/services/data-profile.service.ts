import { Injectable } from '@angular/core';
import { Profile, ButtonChip, Card } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataProfileService {
  private dataProfile: Profile;
  public btnChips: ButtonChip[] = [];

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
				height: 200,
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
    
    this.dataProfile = {
      id: 2233,
      nameUser: 'Nguyễn Tiến Thành',
      subName: 'Hoa rơi của phật, vạn sự tùy duyên',
      avatar: 'https://i.imgur.com/vfHjMCH.jpg',
      married: 'Kết hôn',
      work: 'Vườn chuối Hà Nam',
      address: 'Hà Nam',
      friends: [
        {
          id: 1111,
          nameUser: 'Nguyễn Văn Tráng',
          avatar: 'https://i.imgur.com/vfHjMCH.jpg',
          subName: 'Mãi là của C',
          married: '',
          work: '',
          address: '',
          friends: [],
          posts: []
        },
        {
          id: 2222,
          nameUser: 'Nguyễn Văn A',
          avatar: 'https://i.imgur.com/PfZ6kcm.jpg',
          subName: 'Học cho vui ấy mà',
          married: '',
          work: '',
          address: '',
          friends: [],
          posts: []
        },
        {
          id: 3333,
          nameUser: 'Nguyễn Văn B',
          avatar: 'https://i.imgur.com/Vi1ihEw.jpg',
          subName: 'Chấp Thành con xe',
          married: '',
          work: '',
          address: '',
          friends: [],
          posts: []
        },
        {
          id: 5555,
          nameUser: 'Nguyễn Thị C',
          avatar: 'https://i.imgur.com/EkwHZnN.jpeg',
          subName: 'Thế thôi',
          married: '',
          work: '',
          address: '',
          friends: [],
          posts: []
        },
        {
          id: 6666,
          nameUser: 'Nguyễn Văn D',
          avatar: 'https://i.imgur.com/PfZ6kcm.jpg',
          subName: 'Quân trọc Cầu Giấy',
          married: '',
          work: '',
          address: '',
          friends: [],
          posts: []
        }
      ],
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
          numberLike: 20,
          isLike: true,
          numberComment: 35,
          numberShare: 0,
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
          time: 12000,
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
          numberLike: 20,
          isLike: true,
          numberComment: 35,
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
          time: 12000,
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
          numberLike: 20,
          isLike: true,
          numberComment: 35,
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
          time: 12000,
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
          numberLike: 20,
          isLike: true,
          numberComment: 35,
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
          time: 12000,
          typePrivacy: 'pu',
          attachments: [
            {
              type: 'img',
              url: 'https://i.imgur.com/MtHNBId.jpg'
            }
          ],
          numberLike: 20,
          isLike: true,
          numberComment: 35,
          numberShare: 0,
          statusAction: 1
        },
      ]
    }
  }

  getProfile(){
    return this.dataProfile;
  }

  getBtnChips(){
    return this.btnChips;
  }

  addProfile(id: number, value: Card){
    value.id = id;
    this.dataProfile.posts.unshift(value);
  }
}
