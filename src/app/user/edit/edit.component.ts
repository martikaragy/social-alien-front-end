import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserModel} from '../user.model';
import { IUser } from '../user';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  editProfileForm: FormGroup;
  user:IUser;
  message: string;
  subscription: Subscription;

  constructor(private userModel: UserModel, private fb: FormBuilder) { 

  }

  ngOnInit() {

    this.user = this.userModel.displayedUser;
    this.editProfileForm = this.fb.group({
       firstName:[this.user.firstName, [Validators.maxLength(50)]],
       lastName:[this.user.lastName, [Validators.maxLength(50)]],
       email: [this.user.email,[Validators.email]]
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  updateUser(firstName: string, lastName: string, email: string){

    this.subscription = this.userModel.updateUser(this.userModel.displayedUser.username, firstName, lastName, email).subscribe(

       user => this.message = "Successful update!",
       (error: Error) => {
         console.log(error.message);
         this.message = 'Some kind of error happened.';
        }
    );


  };


}

