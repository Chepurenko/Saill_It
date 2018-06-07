import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmValidator} from '../validator-form';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, [ confirmValidator]);

  constructor(private authService: AuthService) {
    // this.authService.registration(this.signUpForm)
    //   .subscribe(data => console.log(data));
  }
  submit() {
    this.authService.registration(this.signUpForm)
      .subscribe(data => console.log(data));
    // console.log(this.signUpForm, this.signUpForm.get('confirmPassword'));
  }
  ngOnInit() {
  }
}
