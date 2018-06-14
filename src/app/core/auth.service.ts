import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {LoginModel, RegistrationModel} from './forms.model';
import {SessionService} from './session-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser = new BehaviorSubject(Boolean);
  redirectUrl: string;
  constructor(private http: HttpClient,
              private sessionService: SessionService,
              private router: Router) {}
  public registration(user): Observable<any> {
    const body = new RegistrationModel(user);
    return this.http.post('http://light-it-04.tk/api/registration/', body)
      .pipe(
        catchError(this.handleError),
        tap(response => {
          this.sessionService.token =  response.token;
          this.sessionService.userProfile = response.user;
        })
      );
  }
  public login(user): Observable<any>  {
    const body = new LoginModel(user);
    return this.http.post('http://light-it-04.tk/api/login/', body)
      .pipe(
        catchError(this.handleError),
        tap(response => {
          this.sessionService.token = response.token;
          this.sessionService.userProfile = response.user;
          this.currentUser = response.user;
        })
      );
  }
  get hasToken(): boolean {
    return this.sessionService.token !== undefined;
  }
  redirectOn = (): void => {
    if (this.hasToken) {
      const redirect = this.redirectUrl ? this.redirectUrl : '/product';
      this.router.navigate([redirect]);
    }
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
    // return an observable with a user-facing error message
    return throwError(error.error);
  }
  public logout() {
    return this.http.get('http://light-it-04.tk/api/logout/').subscribe(
      () => {
        this.sessionService.token = null;
        this.sessionService.userProfile = null;
        this.currentUser = null;
      }
    );
  }
  public verifyEmail(key: any) {
    return this.http.post('http://light-it-04.tk/api/verify-email/', key);
  }
}
