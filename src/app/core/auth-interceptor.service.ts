import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CookieService} from 'ng2-cookies';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor (private cookie: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = `JWT ${this.cookie.get('Token')}`;
    if (this.cookie.get('Token')) {
      console.log(localStorage.token);
      const authReq = req.clone({headers: req.headers.set('Authorization', authHeader )});
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
