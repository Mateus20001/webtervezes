import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import firebase from 'firebase/compat';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  page = '';
  routes: Array<string> = [];
  title: "Álláskereső" | undefined;
  loggedInUser?: firebase.User | null;

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem("user", JSON.stringify(this.loggedInUser));
    }), (error: any) => {
        console.log(error);
        localStorage.setItem("user", JSON.stringify("null"));
    };
  }

  changePage(selectedPage: string) {
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.authService.logout().then(() =>
    {console.log("logged out successfully")}
    ).catch(error => {
      console.log(error);
    });
  }
}
