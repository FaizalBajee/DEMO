import { Component } from '@angular/core';
import { MainPage } from '../main/main.page';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private service: HomeService) { }

  login(loginForm: any) {
    // console.log(loginForm.value)
    this.service.login(loginForm.value).subscribe((data : any  ) => {
      if (data == "success") {
        // alert(data)
        this.router.navigate(['main'])
      } else {
        alert("not found")
      }
    },
      (error) => {
        alert( error )
      })
  //   // console.log(form.value.username)
  }

}
