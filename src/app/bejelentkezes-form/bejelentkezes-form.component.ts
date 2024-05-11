// login-form.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-bejelentkezes-form',
  templateUrl: './bejelentkezes-form.component.html',
  styleUrls: ['./bejelentkezes-form.component.css']
})
export class BejelentkezesFormComponent {
  loading: boolean = false;
  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;
  constructor(private router: Router, private authService: AuthService) {}
  bejel: { email: string, password: string } = {
    email: '',
    password: ''
  };

  async bejelentkezes() {
    this.authService.login(this.bejel.email as string, this.bejel.password as string).then(cred => {
      console.log(cred);
      this.router.navigateByUrl("/dashboard");
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });
  }
  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}
