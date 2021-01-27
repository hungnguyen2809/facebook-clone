export interface Notifications {
	id: number;
	img: string;
	content: string;
	type: number;
	time: number;
	status: boolean;
}

export class Icon {
	class: string;
	color: string;
}

export interface Story {
	avatar: string;
	content: string;
	name: string;
}

// typeCard
//1. trạng thái có tiêu đề,
//2. trạng thái không có tiêu đề,
//3. Tin trong group

//statusAction
// 1. bình thường đủ like, comment, share,
// 2. có like, share,
// 3. có like, comment,
// 4. chỉ có like
// 5. vô hiệu hóa tính năng

//typePrivacy
// 1. PR -> private
// 2. FR -> friend
// 3. Default: PU -> public
export interface Card {
	id: number;
	typeCard: number;
	avartar: string;
	nameUser: string;
	titleCard: string;
	nameGroup: string;
	content: string;
	time: number;
	typePrivacy: string;
	attachments: any[];
	numberLike: number;
	isLike: boolean;
	numberComment: number;
	numberShare: number;
	statusAction: number;
}

export interface VideoCard {
	id: number;
	avartar: string;
	nameUser: string;
	content: string;
	time: number;
	typePrivacy: string;
	urlVideo: string;
	numberLike: number;
	isLike: boolean;
	numberComment: number;
	numberShare: number;
	statusAction: number;
	follow: boolean;
}

export interface ButtonChip {
	icon: string;
	name: string;
	height: number;
}

export interface Profile {
	id: number;
  avatar: string;
  background: string;
	nameUser: string;
  subName: string;
  numberFriend: number;
	abouts: { type: string; value: string; }[];
  imagesAbout: string[];
	friends: number[];
	posts: Card[];
}
