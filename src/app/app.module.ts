import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllasDetailComponent } from './allas-detail/allas-detail.component';
import { AllasokComponent } from './allasok/allasok.component';
import { MessagesComponent } from './messages/messages.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AllasFormComponent } from './allas-form/allas-form.component';
import { ErdekesAdatokComponent } from './erdekes-adatok/erdekes-adatok.component';
import { CapitalizeFirstPipe } from './capitalizeFirstPipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BejelentkezesFormComponent } from './bejelentkezes-form/bejelentkezes-form.component';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FirebaseAppModule,
    AngularFireModule.initializeApp(environment.firebase),
    //provideFirebaseApp(() => initializeApp({"projectId":"webfejl-2024-e9b54","appId":"1:785205672322:web:f759cbe85b3a0ccc4fb79b","storageBucket":"webfejl-2024-e9b54.appspot.com","locationId":"europe-west","apiKey":"AIzaSyDdFXwe9Lftt21M9iqTW1pjo_fs8nMrG7A","authDomain":"webfejl-2024-e9b54.firebaseapp.com","messagingSenderId":"785205672322","measurementId":"G-PC1BQL3Q29"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  declarations: [
    CapitalizeFirstPipe,
    AppComponent,
    DashboardComponent,
    AllasokComponent,
    AllasDetailComponent,
    MessagesComponent,
    AllasFormComponent,
    ErdekesAdatokComponent,
    BejelentkezesFormComponent,
    RegistrationFormComponent,
    ProfileComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
