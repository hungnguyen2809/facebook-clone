import { Injectable } from "@angular/core";
import { VideoCard, ButtonChip } from "../interfaces";

@Injectable({
	providedIn: "root",
})
export class DataWatchService {
  private dataWatch: VideoCard[] = [];
  private btnChips: ButtonChip[] = [];

	constructor() {
    this.btnChips = [
      {
        icon: 'radio',
        name: 'Trực tiếp',
        height: 120
      },
      {
        icon: 'restaurant',
        name: 'Ẩm thực',
        height: 120
      },
      {
        icon: 'game-controller',
        name: 'Chơi game',
        height: 140
      },
    ];

		this.dataWatch = [
			{
				id: 1,
				avartar: "https://i.imgur.com/6Xfy2Ws.jpeg",
				nameUser: "Động tổ lái",
				content: "Thành tổ lái",
				time: 300,
				typePrivacy: "",
				urlVideo: "https://i.imgur.com/lYBYps2.mp4",
				numberLike: 8800,
				isLike: false,
				numberComment: 1000,
				numberShare: 10000,
				statusAction: 1,
				follow: false,
			},
			{
				id: 2,
				avartar:
					"https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-1/p160x160/55882048_1110466989141037_3584556447993692160_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=mIgCQMmyn7UAX__qWF2&_nc_ht=scontent.fhan3-3.fna&_nc_tp=6&oh=4fdfddf303921c34cf32158dd887c9cc&oe=5F561964",
				nameUser: "Nguyễn Văn Hùng",
				content: "Một nụ cười bằng 10 thang thuốc bổ.",
				time: 3700,
				typePrivacy: "",
				urlVideo: "https://i.imgur.com/rgDtC6G.mp4",
				numberLike: 600,
				isLike: false,
				numberComment: 1000,
				numberShare: 10000,
				statusAction: 1,
				follow: true,
			},
			{
				id: 3,
				avartar: "https://i.imgur.com/CfhGDGJ.jpg",
				nameUser: "Nguyễn Văn Tráng",
				content: "Chào các bạn.",
				time: 3700,
				typePrivacy: "",
				urlVideo: "https://i.imgur.com/U2kyxhU.mp4",
				numberLike: 200,
				isLike: false,
				numberComment: 1000,
				numberShare: 10000,
				statusAction: 1,
				follow: false,
			},
		];
	}

	getAllDataWatch() {
		return this.dataWatch;
  }
  
  getAllDataSuggetBtnChip(){
    return this.btnChips;
  }
}
