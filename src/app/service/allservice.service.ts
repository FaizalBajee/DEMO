import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  constructor(private http: HttpClient) { }

  leave(date:any,reason:any){
    let payload=new HttpParams();
    payload=payload.append("Date",date)
    payload=payload.append("Reason",reason)
    console.log(date,reason)
    return this.http.post((environment.BASEURL+"/leave"),payload)
  }

}
