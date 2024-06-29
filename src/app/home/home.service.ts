import { Injectable } from '@angular/core';
import { HomePage } from './home.page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  login(obj: any) {
    // const Pname: any = JSON.stringify(obj.name)
    // const Ppass: any = JSON.stringify(obj.password)
    // let payload = new HttpParams();
    // payload = payload.append("name", JSON.parse(Pname))
    // payload = payload.append("password", JSON.parse(Ppass))

    // console.log(payload)
    // console.log(obj)

    return this.http.post(environment.BASEURL + "/login", obj)
  }

}
