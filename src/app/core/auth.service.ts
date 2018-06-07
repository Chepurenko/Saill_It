import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  public registration(user) {
    const body = {'username': 'user',
                  'email': (user.controls.userEmail.value),
                  'password1': user.controls.userPassword.value,
                  'password2': user.controls.confirmPassword.value};
    console.log(body);
    return this.http.post('http://light-it-04.tk/api/registration/', body);
  }
  public login(user) {
    const body = {'email': (user.controls.userEmail.value), 'password': user.controls.userPassword.value};
    console.log(body);
    return this.http.post('http://light-it-04.tk/api/login/', body);
  }
}
