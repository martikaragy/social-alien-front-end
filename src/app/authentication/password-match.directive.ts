import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { passwordMatch } from 'src/app/authentication/register/register-validator';

@Directive({
  selector: '[appPasswordMatch][ngModelGroup]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true
    }
  ]
})
export class PasswordMatchDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return passwordMatch(control);
  }
}