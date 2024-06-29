import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logtab',
  templateUrl: './logtab.page.html',
  styleUrls: ['./logtab.page.scss'],
})
export class LogtabPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handle(){
    console.log("hi faizal..")
  }

}
