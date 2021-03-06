import { Injectable } from "@angular/core";
import { Card, Story } from "../interfaces";

@Injectable({
	providedIn: "root",
})
export class DataHomeService {
	private dataStatus: Card[] = [];
	private dataStorys: Story[] = [];
	private dataPersonActiveOnZoom: any[] = [];

	constructor() {
		this.dataStorys = [
			{
				content: "https://i.imgur.com/Vi1ihEw.jpg",
				avatar: "https://i.imgur.com/vfHjMCH.jpg",
				name: "Tráng Nguyễn",
			},
			{
				content: "https://i.imgur.com/Vi1ihEw.jpg",
				avatar: "https://i.imgur.com/vfHjMCH.jpg",
				name: "Nguyễn Tiến Thành",
			},
			{
				content: "https://i.imgur.com/PfZ6kcm.jpg",
				avatar: "https://i.imgur.com/vfHjMCH.jpg",
				name: "Đức Quân",
			},
		];

		this.dataPersonActiveOnZoom = [
			"https://i.imgur.com/Vi1ihEw.jpg",
			"https://i.imgur.com/OHF3jkZ.png",
			"https://i.imgur.com/PfZ6kcm.jpg",
			"https://i.imgur.com/Vi1ihEw.jpg",
			"https://i.imgur.com/OHF3jkZ.png",
			"https://i.imgur.com/PfZ6kcm.jpg",
			"https://i.imgur.com/Vi1ihEw.jpg",
			"https://i.imgur.com/OHF3jkZ.png",
			"https://i.imgur.com/PfZ6kcm.jpg",
			"https://i.imgur.com/vfHjMCH.jpg",
		];

		this.dataStatus = [
			{
				id: 1111,
				typeCard: 1,
				avartar: "https://i.imgur.com/vfHjMCH.jpg",
				nameUser: "Nguyễn Tiến Thành",
				titleCard: "đã cập nhật ảnh đại diện của anh ấy.",
				nameGroup: "",
				content: "",
				time: 130,
				typePrivacy: "PR",
				attachments: [
					{
						type: "img",
						url: "https://i.imgur.com/vfHjMCH.jpg",
					},
				],
				numberLike: 10,
				isLike: false,
				numberComment: 1,
				numberShare: 0,
				statusAction: 5,
			},
			{
				id: 2222,
				typeCard: 2,
				avartar: "https://i.imgur.com/CfhGDGJ.jpg",
				nameUser: "Nguyễn Văn Tráng",
				titleCard: "",
				nameGroup: "",
				content: "Chào cả nhà nhá.... Ok ok nhá.",
				time: 6000,
				typePrivacy: "FR",
				attachments: [
					{
						type: "img",
						url: "https://i.imgur.com/OHF3jkZ.png",
					},
					{
						type: "video",
						url: "https://i.imgur.com/sowixRS.mp4",
					},
					{
						type: "img",
						url: "https://i.imgur.com/PfZ6kcm.jpg",
					},
				],
				numberLike: 100,
				isLike: false,
				numberComment: 50,
				numberShare: 10,
				statusAction: 2,
			},
			{
				id: 3333,
				typeCard: 2,
				avartar:
					"https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-1/p160x160/55882048_1110466989141037_3584556447993692160_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=mIgCQMmyn7UAX__qWF2&_nc_ht=scontent.fhan3-3.fna&_nc_tp=6&oh=4fdfddf303921c34cf32158dd887c9cc&oe=5F561964",
				nameUser: "Nguyễn Văn Hùng",
				titleCard: "",
				nameGroup: "",
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vel eos velit distinctio consequuntur quod debitis ducimus odio, illum aut! Quo minima adipisci praesentium ullam dolorem blanditiis nisi laboriosam iure!
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at harum rem quidem facere, soluta, iste maxime sunt, accusantium eum ad magni. Dolorem ipsum quod adipisci perferendis tenetur error velit.
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tempore voluptatibus iure obcaecati similique sit quia molestiae. Labore eum modi nam cumque aut quibusdam, necessitatibus vero perferendis, possimus velit quas?
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. At repudiandae quia tempora aliquid reiciendis asperiores tenetur veritatis, dolore velit dicta similique quas nobis ratione tempore reprehenderit blanditiis labore culpa est!
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa id placeat alias iusto dolorem saepe sint, aspernatur sed delectus magnam, rerum necessitatibus error quasi voluptate! Maxime velit iste officia quas.
				`,
				time: 500,
				typePrivacy: "PU",
				attachments: [
					{
						type: "video",
						url: "https://i.imgur.com/lOZd5FV.mp4",
					},
					{
						type: "img",
						url: "https://i.imgur.com/T5JnQF2.jpg",
					},
					{
						type: "video",
						url: "https://i.imgur.com/sowixRS.mp4",
					},
					{
						type: "img",
						url: "https://i.imgur.com/PfZ6kcm.jpg",
					},
					{
						type: "img",
						url: "https://i.imgur.com/PfZ6kcm.jpg",
					},
					{
						type: "img",
						url: "https://i.imgur.com/T5JnQF2.jpg",
					},
				],
				numberLike: 7999,
				isLike: false,
				numberComment: 2000,
				numberShare: 10000,
				statusAction: 1,
			},
		];
	}

	getAllStatus() {
		return this.dataStatus;
	}

	addStatus(id: number, value: Card) {
		value.id = id;
		this.dataStatus.unshift(value);
	}

	updateStatus(id, value: Card) {
		this.dataStatus[id] = value;
	}

	getStatus(id) {
		return this.dataStatus[id];
	}

	getAllStory() {
		return this.dataStorys;
	}

	getAllPersonActive(){
		return this.dataPersonActiveOnZoom;
	}
}
