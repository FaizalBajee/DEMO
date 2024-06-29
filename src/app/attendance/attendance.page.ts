import { Component, OnInit } from '@angular/core';
import { AttendanceService } from './attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  photos: any[];

  constructor(private service: AttendanceService) {
    this.photos = this.service.photos;
  }
  urii = this.service.FileName;
  FileName = this.service.format;

  ngOnInit() {
  }
  addPhotoToGallery() {
    this.service.addNewToGallery();
  }
  handleUpload() {
    this.service.handleUpload().subscribe(res => {
      console.log(res)
    })

  }

}
