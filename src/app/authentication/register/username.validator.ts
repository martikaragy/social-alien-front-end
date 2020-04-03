import {ValidationErrors, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserModel} from '../../user/user.model';

export const registerAsyncValidator = 
  (userModel:UserModel) => {
    return (control: FormControl): Observable<ValidationErrors | null> => {
      return userModel.getUserByUsername(control.value).pipe(
        map(user => {
          return user ?  {usernameTaken: true} : null;
        })
      );
    };
  };





