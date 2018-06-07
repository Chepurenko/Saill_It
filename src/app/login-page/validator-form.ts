import {FormGroup, ValidationErrors} from '@angular/forms';

export function confirmValidator(control: FormGroup): ValidationErrors | null {
  if (control.get('userPassword').value !== control.get('confirmPassword').value) {
    return {'notEqual': true};
  } return null;
}
