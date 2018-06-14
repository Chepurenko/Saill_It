import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {
  AuthService as AuthServiceLog,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  private key: {
    key: string;
  };
  constructor(private socialAuthService: AuthServiceLog, private router: ActivatedRoute, private authService: AuthService) { }
  ngOnInit() {
    this.router.queryParams.subscribe(
      (value: {key: string}) => {
        this.key = value;
      }
    );
    if (!!this.key) {
      this.authService.verifyEmail(this.key).subscribe();
    }
}
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        this.authService.loginGoogle(userData).subscribe();
      }
    );
  }
}
