import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  constructor(private http: HttpClient) { }

  handleAdd(userForm: any) {
    // console.log(userForm.value.Name + userForm.value.Phone + userForm.value.Location)
    let payload=new HttpParams();
    payload=payload.append("name",userForm.value.Name)
    payload=payload.append("phone",userForm.value.Phone)
    payload=payload.append("location",userForm.value.Location)
     
    return this.http.post(environment.BASEURL+"/addContact",payload)
    
  }

}
