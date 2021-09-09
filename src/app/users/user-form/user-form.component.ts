import { Component, OnInit } from '@angular/core';
import { MyErrorStateMatcher } from 'src/infrastructure/myerror-state-matcher';
import { CreateUser } from 'src/models/users/create.user';
import { UserErrors } from 'src/models/users/user.errors';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  hidePassword: boolean = true;
  userErrors: UserErrors = {
    FirstName: [],
    secondName: [],
    email: [],
    password: [],
    role: []
  };
  user: CreateUser = {
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    role: -1
  };

  constructor(
    private userService: UserService
  ) { 
  }

  ngOnInit(): void {
  }

  getErrorMessageFirstName() {
    return this.userErrors.FirstName[0];
  }

  getErrorMessage() {
    return "dsfs";//this.userErrors.FirstName[0];
  }

  onSubmit() {
    if (confirm("Create new user?")) {
      this.userService.create(this.user)
        .subscribe(result => {
          alert("Success created new user: " + result.fullName + " .");
        }, (error: any) => {
          this.userErrors.FirstName = error.error.errors.FirstName
          console.log(error.error.errors)
        });
    }
  }

}
