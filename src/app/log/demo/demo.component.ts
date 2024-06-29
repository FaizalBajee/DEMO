import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AddContactService } from 'src/app/add-contact/add-contact.service';
import { AddModel } from 'src/app/model/AddModel';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {

  valueData: AddModel[] = [];

  @Input('Iname') name: any;

  constructor(private service: AddContactService) { }

  @Output() toggle: EventEmitter<boolean> = new EventEmitter;

  ngOnInit() { }

  handeButton() {
    this.toggle.emit(false)
  }

  handleAdd(userForm: any) {
    // console.log(userForm.value)
    this.valueData = userForm.value;
    alert(JSON.stringify(this.valueData))
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
        // this.router.navigate(['log'])
      } else {
        alert(JSON.stringify(data))
      }
    })
  }

}
