import { Icon } from './../interfaces';
import { Injectable } from "@angular/core";

export interface IconNotifi {
	type: number;
	color: string;
	class: string;
}
@Injectable({
	providedIn: "root",
})
export class ProcessAllService {
	private listIcons: IconNotifi[] = [
		{ type: 1, color: "#2ed573", class: "fas fa-comment" }, //comment
		{ type: 2, color: "#3867d6", class: "fas fa-thumbs-up" }, //like
		{ type: 3, color: "#2e86de", class: "fas fa-users" }, //group
		{ type: 4, color: "#fa8231", class: "fas fa-id-card-alt" }, //card
		{ type: 5, color: "#eb3b5a", class: "fas fa-heart" }, //heart tim
  ];
  
	constructor() {}

	getContentCard(value: string): string {
		let result = "";
		if (value.length > 500) {
			result = value.substr(0, 500) + "...";
		} else {
			result = value;
		}
		return result;
	}

	getContentNotifi(value: string): string {
		let result = "";
		if (value.length < 130) {
			result = value;
		} else {
			result = value.substring(0, 130) + "...";
		}
		return result;
  }
  
  getIconNotifi(typeIcon: number): Icon {
    let classIcon = new Icon();
		for (let item of this.listIcons) {
			if (item.type === typeIcon) {
        classIcon.class = item.class;
				classIcon.color = item.color;
			}
		}
    return classIcon;
	}

	getTime(timeSecond: number): string {
		let result = "";
		if (timeSecond < 60) {
			result = timeSecond + " giây trước";
		} else if (timeSecond < 3600) {
			let minutes = timeSecond / 60;
			result = Math.floor(minutes) + " phút trước";
		} else {
			let hour = timeSecond / 3600;
			result = Math.floor(hour) + " giờ trước";
		}
		return result;
  }
  
}
