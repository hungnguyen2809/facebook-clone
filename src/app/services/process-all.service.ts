import { Icon } from "./../interfaces";
import { Injectable } from "@angular/core";
import { DataHomeService } from "./data-home.service";
import { DataProfileService } from "./data-profile.service";

export interface IconNotifi {
	type: number;
	color: string;
	class: string;
}
@Injectable({
	providedIn: "root",
})
export class ProcessAllService {
	public idCreateStatus: string = "";
	public images: any[] = [];

	private listIcons: IconNotifi[] = [
		{ type: 1, color: "#2ed573", class: "fas fa-comment" }, //comment
		{ type: 2, color: "#3867d6", class: "fas fa-thumbs-up" }, //like
		{ type: 3, color: "#2e86de", class: "fas fa-users" }, //group
		{ type: 4, color: "#fa8231", class: "fas fa-id-card-alt" }, //card
		{ type: 5, color: "#eb3b5a", class: "fas fa-heart" }, //heart tim
	];
	private mapTypeAbouts = new Map();

	private typeAbouts = [
		{
			type: 'school',
			icon: 'school',
			title: 'Đã học tại',
			title2: ''
		},
		{
			type: 'from',
			icon: 'navigate',
			title: 'Đến từ',
			title2: ''
		},
		{
			type: 'live',
			icon: 'location',
			title: 'Sống tại',
			title2: ''
		},
		{
			type: 'work',
			icon: 'briefcase',
			title: 'Công việc',
			title2: ''
		},
		{
			type: 'married',
			icon: 'heart',
			title: '',
			title2: ''
		},
		{
			type: 'follow',
			icon: 'albums',
			title: 'Có',
			title2: 'người theo dõi',
		},
		{
			type: 'link',
			icon: 'link',
			title: '',
			title2: ''
		}
		
	];

	constructor(
		private dataHomeService: DataHomeService,
		private dataProfileService: DataProfileService
	) {
		this.initMapAbout();
	}

	initMapAbout(){
		this.typeAbouts.forEach((element)=>{
			this.mapTypeAbouts.set(element.type, element);
		});
	}

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

	getIDforHomeAndProfile(): number {
		let idHome = this.dataHomeService.getAllStatus()[
			this.dataHomeService.getAllStatus().length - 1].id;
		let idProfile = this.dataProfileService.getProfileCurrent().posts[
			this.dataProfileService.getProfileCurrent().posts.length - 1].id;

		let id = idHome > idProfile ? idHome : idProfile;
		return id + 1;
	}

	getListInforAbount(abouts: any[]){
		let result = abouts.map((item)=>{
			let typeAbout = this.mapTypeAbouts.get(item.type);
			return {
				icon: typeAbout.icon,
				content: `${typeAbout.title} <b>${item.value}</b> ${typeAbout.title2}`
			}
		})
		return result;
	}
}
