import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: 'app/user/profile.component.html'
})

export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {

  }

  profileForm: FormGroup;
  private firstName:FormControl;
  private lastName:FormControl;
  ngOnInit() {
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['user/login']);
    }
    else {
      this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName

      })
    }
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }

  }
  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstName(){    
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(){    
    return this.lastName.valid || this.lastName.untouched;
  }
}