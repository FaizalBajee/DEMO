import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditContactService } from './edit-contact.service';
import { Observable } from 'rxjs';
import { LogPage } from '../log/log.page';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage implements OnInit {

  userOBJ: any = [];

  OBJ:any={
    "Name":"",
    "Phone":"",
    "Location":""
  }

  Name: any;
  Phone: any;
  Location: any;

  constructor(private router: Router, private service: EditContactService ,private log:LogPage) {

    if (this.router.getCurrentNavigation()?.extras.state) {
      this.userOBJ = this.router.getCurrentNavigation()?.extras.state
    }
    this.Name = this.userOBJ.data.Name;
    this.Phone = this.userOBJ.data.Phone;
    this.Location = this.userOBJ.data.Location;
  }

  ngOnInit() {
  }

  handleEdit(form: any) {
    this.service.editID = this.userOBJ.data.id
    this.service.handleEdit(form).subscribe((res: any) => {
      alert(res)
    });
    // alert(this.userOBJ.data.id)
    this.router.navigate(['log'])
    
  }

}
