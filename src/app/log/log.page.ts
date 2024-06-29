import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { details } from '../model/get';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
  constructor(private service: LogService, private router: Router, private toast: ToastController) {
  }

  isDemo: boolean = false;

  data: details[] = [];
  name = '';

  ngOnInit() {
    console.log("ngOnInit Calling....")
    this.getFuntion()
  }

  getFuntion() {
    this.service.getData().subscribe(res => {
      this.data = res
      console.log(this.data)
    })
  }

  handleRefresh(event: any) {
    console.log('Refreshinggg....')
    setTimeout(() => {
      this.service.getData().subscribe(res => {
        this.data = res;
        console.log(this.data);
        event.target.complete();
      })
    }, 200);
  }


  handleAdd() {
    console.log('press>>>>>')
    // this.router.navigate(['add-contact'])
    this.isDemo = true;
    this.getFuntion()
  }

  handleDelete(e: any) {
    this.service.handleDelete(e).subscribe(data => {
      if (data) {
        this.getFuntion()
        console.log(data)
      }
    })

  }

  handleEdit(e: any) {
    let navExra: NavigationExtras = {
      state: {
        data: e
      }
    }
    // alert("happy coding..."+ e.id)
    this.router.navigate(['edit-contact'], navExra);
    this.getFuntion()
  }

  handleToggle(event: any) {
    console.log(event)
    this.isDemo = event
  }

}
