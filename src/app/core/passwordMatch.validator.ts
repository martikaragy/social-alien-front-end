import {ValidationErrors, FormGroup } from '@angular/forms';

export function passwordMatch(control: FormGroup): ValidationErrors | null {
    return control.get('password').value === control.get('repeatPassword').value ? null : { passwordMatch: true };
    }





