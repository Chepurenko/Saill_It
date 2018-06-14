import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmValidator, emailValidator, passwordValidator} from '../validator-form';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, emailValidator]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(8), passwordValidator]),
    confirmPassword: new FormControl('', [Validators.required])
  }, [ confirmValidator]);

  constructor(private authService: AuthService) {  }
  get userEmail(): FormControl { return this.signUpForm.get('userEmail') as FormControl; }
  get userPassword(): FormControl { return this.signUpForm.get(['userPassword']) as FormControl; }
  get confirmPassword(): FormControl { return this.signUpForm.get(['confirmPassword']) as FormControl; }
  // get passwordGroup(): FormGroup { return this.signUpForm.get('passwordGroup') as FormGroup; }
  submit() {
    this.authService.registration(this.signUpForm.value).subscribe(this.authService.redirectOn);
  }
  ngOnInit() {
    // console.log(this.signUpForm);
  }
}
