import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export interface image {
  uri: any;
  type: any;
  name: any;
}


@Injectable({
  providedIn: 'root'
})


export class AttendanceService {

  public photos: UserPhoto[] = [];

  public image: image[] = [];

  constructor(private http: HttpClient) { }
  img: any;
  uriii: any;
  FileName: any;
  format: any;

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.img = capturedPhoto.webPath
    this.uriii = capturedPhoto.webPath!
    this.FileName = this.uriii?.substring(this.uriii.lastIndexOf('/') + 1);
    this.format = capturedPhoto.format;

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });
    this.image.unshift({
      uri: capturedPhoto.webPath,
      type: "image/jpeg",
      name: this.FileName
    })


    // console.log(capturedPhoto)
    // console.log('format  :', capturedPhoto.format)
    // console.log("FILE NAME  :", this.FileName)

  }


  handleUpload() {
    console.log("upload>>>");
    let payload = new FormData();
    // formData.append('image', this.uriii, this.format + '.' + this.FileName.split('.').pop());
    payload.append("image", JSON.stringify(this.img))
    payload.append("name", this.FileName)

    console.log(payload)

    return this.http.post((environment.BASEURL + "/attendance"), payload)
  }

}
