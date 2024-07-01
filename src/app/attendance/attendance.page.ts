import { Component, OnInit } from '@angular/core';
import { AttendanceService } from './attendance.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})

export class AttendancePage implements OnInit {

  public photos: UserPhoto[] = [];

  image: any = "";
  FileName: any = "";

  constructor(private service: AttendanceService) {
  }


  ngOnInit() {
  }
  public async addPhotoToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });


    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });
    this.image = capturedPhoto.webPath
    this.FileName = this.image?.substring(this.image.lastIndexOf('/') + 1)

  }
  async handleUpload() {
    const response = await fetch(this.image);
    const blob = await response.blob();
    this.service.handleUpload(blob, this.FileName).subscribe(res => {
      console.log(res)
    })

  }

}
