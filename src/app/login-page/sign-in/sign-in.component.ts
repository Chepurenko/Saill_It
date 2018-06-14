import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';
import {emailValidator} from '../validator-form';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    userEmail: new FormControl('', [emailValidator, Validators.required]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  constructor(private authService: AuthService) { }
  submit() {
    this.authService.login(this.signInForm.value)
      .subscribe(this.authService.redirectOn);
  }
  ngOnInit() {
  }

}
