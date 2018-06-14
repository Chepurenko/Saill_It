import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const isEmailValid = emailRegEx.test(control.value);
  return isEmailValid ? null : {'emailInvalid': true};
}
export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegEx = /^(?=.*\d)(?=.*[a-z]).{8,15}$/;
  const isEmailValid = emailRegEx.test(control.value);
  return isEmailValid ? null : {'passwordInvalid': true};
}
export function confirmValidator(control: FormGroup): ValidationErrors | null {
  if (control.get('userPassword').value !== control.get('confirmPassword').value) {
    return {'notEqual': true};
  } return null;
}
