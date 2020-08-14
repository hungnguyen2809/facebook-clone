export interface Notifications{
  img: string;
  content: string;
  type: number;
  time: number;
  status: boolean;
}

export class Icon{
  class: string;
  color: string;
}

export interface Story{
  avatar: string;
  content: string;
  name: string;
}

export interface Card{
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

export interface VideoCard{
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

export interface ButtonChip{
  icon: string;
  name: string;
  height: number;
}
