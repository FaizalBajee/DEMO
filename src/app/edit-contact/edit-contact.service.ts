import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class EditContactService {

  editID:any;
  
  constructor(private http: HttpClient) { 
  }

  handleEdit(form: any) {

    let payload = new HttpParams();
    payload = payload.append("name", form.value.Name)
    payload = payload.append("phone", form.value.Phone)
    payload = payload.append("location", form.value.Location)
    payload=payload.append("editID",this.editID)

    // console.log(payload)
    // console.log("id value :"+this.editID)
    return this.http.put(environment.BASEURL+"/edit", payload)
  }
}
