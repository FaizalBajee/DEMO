import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.page.html',
  styleUrls: ['./hometab.page.scss'],
})
export class HometabPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleAttendance(){
    // console.log("presss<<<<<")
      this.router.navigate(['attendance'])
  }
  handleLog(){
    this.router.navigate(['log'])
  }

}
