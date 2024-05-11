// registration-form.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  constructor(private router: Router, private authService: AuthService, private userService: UserService) {}
  registration: { username: string, email: string, password: string, confirmPassword: string, gender: string, selectedDate: Date, isSubscribed: boolean} = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: "",
    selectedDate: new Date(),
    isSubscribed: false
  };
agreeTerms: any;

  onSubmit() {
    this.authService.signup(this.registration.email, this.registration.password).then(cred => {
      const user : User = {
        id: cred.user?.uid as string,
        email: this.registration.email,
        username: this.registration.username,
        gender: this.registration.gender,
        selectedDate: this.registration.selectedDate,
        isSubscribed: this.registration.isSubscribed
      };
      try {
        this.userService.create(user);
      } catch(error) {
        console.log(error)
      }
    });
    this.router.navigateByUrl("/dashboard");
  }
}
