import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  private key: {
    key: string;
  };
  constructor(private router: ActivatedRoute, private authService: AuthService) { }
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
}
