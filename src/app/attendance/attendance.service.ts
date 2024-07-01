import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})


export class AttendanceService {
  async: any;

  constructor(private http: HttpClient) { }

  async fetch(data: any) {

  }

  handleUpload(image: any, FileName: any) {
    console.log("upload>>>");
    // const response = fetch(image);
    // const blob =  response.blob();
    let payload = new FormData();
    payload.append("image", image, FileName)
    payload.append("name", FileName)

    console.log(image)

    return this.http.post((environment.BASEURL + "/attendance"), payload)
  }

}
