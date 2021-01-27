import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker/ngx";
import { ProcessAllService } from 'src/app/services/process-all.service';

@Component({
  selector: 'app-actions-crate-status',
  templateUrl: './actions-crate-status.page.html',
  styleUrls: ['./actions-crate-status.page.scss'],
})
export class ActionsCrateStatusPage implements OnInit {

  constructor(private imagePickerCtrl: ImagePicker, private processService: ProcessAllService) { }

  ngOnInit() {
  }

  onChooseImage(){
    this.imagePickerCtrl.hasReadPermission()
    .then(() => {
      let options: ImagePickerOptions = {
        allow_video: true,
        maximumImagesCount: 5,
        title: 'Chọn ảnh'
      };
  
      this.imagePickerCtrl.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
          this.processService.images.push(results[i]);
        }
      });
    })
    .catch(() =>{
      this.imagePickerCtrl.requestReadPermission().then().catch(()=>{ alert("Bạn cần cấp quyền") });
    });

  }
}
