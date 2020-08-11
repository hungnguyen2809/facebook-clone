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
  images: string[];
  numberLike: number;
  isLike: boolean;
  numberComment: number;
  numberShare: number;
}