import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private url = 'http://localhost:3000/offices';

 // currentUser: User;
  httpOptions: any;

  constructor(
      private http: HttpClient,
      private authenticationService: AuthService
  ) {
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': '*'
          })
      };
  }




  getOffices() {
      return this.http.get<any>(this.url, this.httpOptions);
  }

 /*  postEvent(event) {
      return this.http.post<Event>(this.url + this.currentUser.userName, JSON.stringify(event), this.httpOptions);
  }

  updateEvent(id :number, event) {
      return this.http.put<any>(this.url + this.currentUser.userName  +"/" + id, JSON.stringify(event), this.httpOptions);
  }
  deleteEvent(id: number) {
      return this.http.delete<any>(this.url + this.currentUser.userName +"/" + id, this.httpOptions);
  } */
}
