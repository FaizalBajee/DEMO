import { Component, OnInit } from '@angular/core';
import { AddContactService } from './add-contact.service';
import { Router } from '@angular/router';
import { LogPage } from '../log/log.page';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  constructor(private service: AddContactService, private router: Router, private log: LogPage) { }

  ngOnInit() {
  }
  Name: string = '';
  Phone: string = '';
  Location: string = '';

  handleAdd(userForm: any) {
    if (userForm.value.Name == "") {
      alert("enter the name")
      return;
    }
    if (userForm.value.Phone == "") {
      alert("enter the Number")
      return;
    }
    if (userForm.value.Location == "") {
      alert("enter the Location")
      return;
    }
    this.service.handleAdd(userForm).subscribe(data => {

      if (data == "Inserted Successfully") {
        alert(data)
        this.router.navigate(['log'])
      } else {
        alert(JSON.stringify(data))
      }
    })
  }
}
