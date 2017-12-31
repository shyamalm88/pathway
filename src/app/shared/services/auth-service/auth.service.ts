import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppSettings } from '../../constants/constant';

@Injectable()
export class AuthService {
  private isLoggedIn = new BehaviorSubject<any>(null);

  constructor(private http: HttpService) {}

  public isAuthenticated() {
    const user = sessionStorage.getItem('user');
    return user;
  }
}
