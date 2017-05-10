import { Component, OnInit, HostBinding } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
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

  // Facebook authentication pop-up
  loginFb() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider() ).
    then( (success) => { this.router.navigate(['/members']); } ).
    catch( (err) => { this.error = err; } )
  }
  
  // Google authentication pop-up
  loginGoogle() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() ).
    then( (success) => { this.router.navigate(['/members']); } ).
    catch( (err) => { this.error = err; } )
 }
  
  ngOnInit() {
    
  }

}
