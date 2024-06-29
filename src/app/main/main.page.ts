import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleAttendance(){
    this.router.navigate(['/attendance'])
  }
  handleLog(){
    this.router.navigate(['log'])
  }

  handleHomeTab(){
    this.router.navigate(['hometab'])
  }

}
