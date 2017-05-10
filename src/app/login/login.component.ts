import { Component, OnInit, HostBinding } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;

  // Login Component constructor: if successful, route client to members
  constructor(public afAuth: AngularFireAuth,private router: Router) {
      this.afAuth.authState.subscribe(auth => { 
        if(auth) {
          this.router.navigateByUrl('/members');
        }
      });
    }

  /* TODO: Facebook and Google login methods

  loginFB() {

  }
  
  loginGoogle() {
    
  }

  loginEmail() {
    
  }

  */

  ngOnInit() {
  }

}
