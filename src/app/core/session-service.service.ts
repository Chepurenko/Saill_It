import {Injectable} from '@angular/core';
import {UserProfileModel} from './user.model';
import {CookieService} from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private cookie: CookieService) { }

  get token(): string {
    return this.cookie.get('token');
  }

  set token(cookieToken: string) {
    if (cookieToken !== null) {
      this.cookie.set('token', cookieToken);
    } else {
      this.cookie.delete('token');
    }
  }

  get userProfile(): UserProfileModel {
    return JSON.parse(localStorage.userProfile);
  }

  set userProfile(userData: UserProfileModel) {
    if (userData !== null) {
      localStorage.userProfile = JSON.stringify(userData);
    } else {
      localStorage.removeItem('userProfile');
    }
  }
}

