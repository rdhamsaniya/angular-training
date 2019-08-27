import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  constructor() { }

  passwordValidators(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      console.log(control.value);
      var regex = RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/)
      console.log(regex.test(control.value));
      if (!regex.test(control.value)) {
        return Object.assign({ reqPattern: true });
      }
    };
  }
}
