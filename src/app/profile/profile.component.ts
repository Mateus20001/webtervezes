import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user : User = {
    id: JSON.parse(localStorage.getItem('user') as string).id,
    email: JSON.parse(localStorage.getItem('user') as string).email,
    username: JSON.parse(localStorage.getItem('user') as string).username,
    gender: JSON.parse(localStorage.getItem('user') as string).gender,
    selectedDate: JSON.parse(localStorage.getItem('user') as string).selectedDate,
    isSubscribed: JSON.parse(localStorage.getItem('user') as string).isSubscribed
  };
  isEditing: boolean = false; 
  newUsername: string = '';

  constructor(private router: Router, private userService : UserService) {}

  editProfile() {
    this.isEditing = true;
  }

  saveChanges() {
    this.userService.update(this.user).then(() =>
      {console.log("profile changed successfully")}
      ).catch(error => {
        console.log(error);
      });;
    this.isEditing = false;
  }
  deleteProfile() {
    this.userService.delete(this.user.id);
    localStorage.setItem("user", JSON.stringify("null"));
    this.router.navigateByUrl("");
  }
}
