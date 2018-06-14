import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {SessionService} from './session-service.service';
import {UserProfileModel} from './user.model';
import {catchError, distinctUntilChanged, share, tap} from 'rxjs/operators';
import {UserInterface} from './user-interface.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public currentUser = new BehaviorSubject<UserProfileModel>(null);
  constructor(private http: HttpClient,
              private sessionService: SessionService,
              private router: Router) {}

  setUser(user: UserProfileModel) {
    this.currentUser.next(user);
  }
  getUser() {
    if (this.currentUser.value) {
    } else if (this.sessionService.userProfile) {
      this.currentUser.next(this.sessionService.userProfile);
    } else if (this.sessionService.token) {
      this.getProfile().subscribe();
    }
    return this.currentUser.asObservable().pipe();
  }

  public getProfile() {
    return this.http.get(`http://light-it-04.tk/api/profile/`)
      .pipe(
        tap((data: any) => {
          console.log('login: ' + JSON.stringify(data));
          this.sessionService.userProfile = data;
          this.currentUser.next(data);
        })
      );
  }

  public updateProfile(user: UserInterface) {
    return this.http.patch(`http://light-it-04.tk/api/profile/`, {user})
      .pipe(
        tap((data: any) => {
          console.log('updateProfile: ' + JSON.stringify(data));
          this.sessionService.userProfile = data;
          this.currentUser.next(data);
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}`);
      for (const key in error.error) {
        if (error.error.hasOwnProperty(key)) {
          console.log(key + ':' + error.error[key]);
        }
      }
    }
  }
}
