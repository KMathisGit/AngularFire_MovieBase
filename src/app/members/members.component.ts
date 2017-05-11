import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [fallIn(), moveInLeft()],
})
export class MembersComponent implements OnInit {
  items: FirebaseListObservable<any>;
  name: any;
  state: string = '';

  constructor(public afAuth: AngularFireAuth, afDb: AngularFireDatabase, private router: Router) {

    this.afAuth.authState.subscribe(auth => {
      if(auth) {
        //console.log('Name :', afAuth.auth.currentUser.displayName);

        // If displayName is null, user logged in with email not FB/Goog auth
        if(afAuth.auth.currentUser.displayName == null){
            // Setting displayName to the email of user
            this.name = afAuth.auth.currentUser.email;
        }
        else {
            // Setting displayName to name registered under FB/Google Acct.
            this.name = afAuth.auth.currentUser.displayName;
        }
      }
    });

    
    this.items = afDb.list('/Movies');

  }

  // TO-DO : Finish sending method to populate firebase
  send() {
    this.items.push( {} );
  }

  logout() {
     this.afAuth.auth.signOut();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
