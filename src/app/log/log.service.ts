import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { details } from '../model/get';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  getData(): Observable<details[]> {
    return this.http.get<details[]>("http://173.0.0.247:8115/contact")
  }
  handleDelete(e: any) {

   return this.http.delete("http://173.0.0.247:8115/delete", {
      "body": {
        "id": JSON.stringify(e.id)
      }
    })
  }
}
