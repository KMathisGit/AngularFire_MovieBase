import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { DataTableModule } from 'angular2-datatable';


// Firebase API Config Information
export const firebaseConfig = {
    apiKey: "AIzaSyByMPDn94qU_mO9wKbGqV-HOrxpR69lBiA",
    authDomain: "angularmoviebase.firebaseapp.com",
    databaseURL: "https://angularmoviebase.firebaseio.com",
    projectId: "angularmoviebase",
    storageBucket: "angularmoviebase.appspot.com",
    messagingSenderId: "359376388067"
};

// Giving Angular's Module heads up on Components/Modules
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    routes,
    BrowserAnimationsModule,
    DataTableModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
