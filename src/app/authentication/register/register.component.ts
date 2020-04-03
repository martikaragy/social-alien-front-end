import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel } from 'src/app/user/user.model';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import { passwordMatch } from 'src/app/core/passwordMatch.validator';
import {registerAsyncValidator} from './username.validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  errorMessage: string;
  subscription: Subscription;

  constructor(private userModel: UserModel, private router:Router, private route: ActivatedRoute, fb: FormBuilder) { 

    this.registerForm = fb.group({
       firstName:["",[Validators.maxLength(50)]],
       lastName:["",[Validators.maxLength(50)]],
       email:["",[Validators.compose([Validators.email, Validators.required])]],
       username:["", Validators.compose([Validators.required, Validators.maxLength(50)]), registerAsyncValidator(userModel)],
       password: ["", Validators.compose([Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$")])],
       repeatPassword:["",Validators.required]
        }
      ,
      {validators: passwordMatch});
}

  ngOnInit() {}

  register(firstName: string, lastName: string, email: string, username: string, password: string, repeatPassword:string ){
    this.subscription = this.userModel.createUser(firstName, lastName, email, username, password, repeatPassword).subscribe(

      user => {this.router.navigate(['/'],{relativeTo: this.route.root});},
      error => {this.errorMessage = 'Some kind of error happened.'}
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getValidationMessages(form: FormGroup, name:string) {
    let messages: string[] = [];
    let formControl = form.controls[`${name}`];
    let errors = formControl.errors;
    if (errors) {
      for (let errorName in errors) {
        switch (errorName) {
          case "required":
          messages.push('This field can\'t be empty.');
          break;
        case "maxlength":
          messages.push(`The entered value must be ${errors['maxlength'].requiredLength} characters at most.`);
          break;
        case "email":
            messages.push(`Please enter a valid email.`);
            break;  
        case "pattern":
          messages.push('The password does not satisfy the requirements.');
          break;
        case "passwordMatch":
          messages.push("Passwords don't match.");
          break;
          case "usernameTaken":
            messages.push("This username is already taken.");
            break;
        }
      }
    }
    return messages;
    }

  

}

