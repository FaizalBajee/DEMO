//io.ionic.starter	
//F1:31:66:D7:4B:95:88:0D:43:DD:0D:63:79:C0:7E:AB:15:2E:7D:90	
import { Component, ElementRef, AfterViewInit, OnInit, ViewChild, viewChild } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { AttendanceService } from './attendance.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment.prod';
import { Geolocation } from '@capacitor/geolocation';
import { Platform } from '@ionic/angular';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})

export class AttendancePage implements OnInit, ViewDidEnter {

  constructor(private platform: Platform) { }

  ionViewDidEnter(): void {
    this.platform.ready().then(() => {
      this.createMap();
    });
  }

  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  async createMap() {
    if (this.mapRef && this.mapRef.nativeElement) {
      const coordinates = await Geolocation.getCurrentPosition();
      this.newMap = await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapRef.nativeElement,
        apiKey: environment.MapAPI,
        config: {
          center: {
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude,
          },
          zoom: 17,
        },
      });
      this.addMarker1()
    } else {
      console.log("map not created")
    }
  }

  async addMarker1() {
    if (!this.newMap) {
      console.log('Map is not initialized');
      return;
    }
    const coordinates = await Geolocation.getCurrentPosition();
    const markers: Marker = {
      coordinate: {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      }
    }
    await this.newMap.addMarker(markers)

    // console.log("result :" + result)
  }

  // @ViewChild('map')mapRef!: ElementRef;



  // async mapLoad() {
  //   const apiKey = 'AIzaSyCLDc700D_Bmc6BBKxWiWSE7WR_LeCRsU8';
  //   // if (!this.mapRef) {
  //   //   console.error('Map reference is not defined');
  //   //   return;
  //   // }
  //   const mapRef = this.mapRef;
  //   const newMap = await GoogleMap.create({
  //     id: 'my-map', // Unique identifier for this map instance
  //     element:mapRef.nativeElement, // reference to the capacitor-google-map element
  //     apiKey: apiKey, // Your Google Maps API Key
  //     forceCreate: true,
  //     config: {
  //       center: {
  //         // The initial position to be rendered by the map
  //         lat: 33.6,
  //         lng: -117.9,
  //       },
  //       zoom: 8, // The initial zoom level to be rendered by the map
  //     },

  //   });
  // }
  async handleMap() {
    this.createMap()
    // printCurrentPosition()

    const coordinates = await Geolocation.getCurrentPosition();

    alert('Latitude  :' + coordinates.coords.latitude + "  Logitude  :" + coordinates.coords.longitude);
    console.log('Latitude  :' + coordinates.coords.latitude + "  Logitude  :" + coordinates.coords.longitude)

  }


  ////for image processing
  // public photos: UserPhoto[] = [];

  // image: any = "";
  // FileName: any = "";

  // constructor(private service: AttendanceService) {
  // }
  ngOnInit() {
    this.createMap()
  }
  // public async addPhotoToGallery() {
  //   // Take a photo
  //   const capturedPhoto = await Camera.getPhoto({
  //     resultType: CameraResultType.Uri,
  //     source: CameraSource.Camera,
  //     quality: 100
  //   });


  //   this.photos.unshift({
  //     filepath: "soon...",
  //     webviewPath: capturedPhoto.webPath!
  //   });
  //   this.image = capturedPhoto.webPath
  //   this.FileName = this.image?.substring(this.image.lastIndexOf('/') + 1)

  // }
  // async handleUpload() {
  //   const response = await fetch(this.image);
  //   const blob = await response.blob();
  //   this.service.handleUpload(blob, this.FileName).subscribe(res => {
  //     console.log(res)
  //   })

  // }

}
