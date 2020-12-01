import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServiceConfig } from '../config/service-config';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userData = new BehaviorSubject<UserModel>(new UserModel);

  constructor(
    private http: HttpClient
  ) {
   }





  CustomerLogin(user: UserModel): Observable<any> {
    return this.http.post<any>(`${ServiceConfig.BASE_URL}login`, user, {
      headers: new HttpHeaders({ })
    });
  }

  saveSessionData(sessionData: any): Boolean {
    let currentSession = localStorage.getItem('session');
    if (currentSession) {
      return false;
    } else {
      let data: UserModel = {
        id: sessionData.data.id,
        customerId: sessionData.data.customerId,
        username: sessionData.data.username,
        role: sessionData.data.role,
        token: sessionData.token,
        isLogged : true
      };
      localStorage.setItem('session', JSON.stringify(data));
      return true;
    }
  }

  getSessionData() {
    let currentSession = localStorage.getItem('session');
    return currentSession;
  }

  logout() {
    localStorage.removeItem('session');
  }
}
