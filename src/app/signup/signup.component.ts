import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public afAuth: AngularFireAuth,private router: Router) {

  }

  // Create account submission, if successful route to login page
  onSubmit(formData) {
    if(formData.valid) {
      //console.log(formData.value);
      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).
      then( (success) => {
        //console.log(success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        //console.log(err);
        this.error = err;
      })
    }
  }

  ngOnInit() {
  }

}
