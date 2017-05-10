import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
    animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

    state: string = '';
    error: any;

    constructor(public afAuth: AngularFireAuth,private router: Router) {
    this.afAuth.authState.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  // Form Submission: route client to members page if successful
  onSubmit(formData) {
    if(formData.valid) {
      //console.log(formData.value);
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).
      then( (success) => { this.router.navigate(['/members']); } ).
      catch( (err) => { 
        //console.log(err);
        this.error = err; 
      })
    }
  }

  ngOnInit() {
  }

}
