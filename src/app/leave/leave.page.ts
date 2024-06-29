import { Component, OnInit } from '@angular/core';
import { AllserviceService } from '../service/allservice.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {

  reason:any='';
  DATE:any='';

  constructor(private service:AllserviceService) { }

  ngOnInit() {

  }

  onDateChange(event: any) {
    const isoString = event.detail.value;
    const formattedDate = this.formatDate(isoString);
    this.DATE=formattedDate;
    // console.log('Selected date:', formattedDate);
  }

  formatDate(isoString: string): string {
    const date = new Date(isoString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

 handleSave(){
    // console.log(this.reason)
    // console.log(this.DATE)
    this.service.leave(this.DATE,this.reason).subscribe(res=>{
      console.log(res)
    })
 }


}
