import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import { LogoutComponent } from 'src/app/modules/security/logout/logout.component';

@Injectable()
export class AuthService {
  public user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {}

  async loginGoogle(){
    try {
      return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {console.log(error);
    }
  }

  async login(email:string, password: string) {
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    return result;
    }
    catch (error){
      console.log(error);
    }
  }

  async register(email:string, password: string) {
    try{
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
    }
    catch (error){
      console.log(error);
  }
 }


  async logout() {
    try{
    await  this.afAuth.signOut();
  }
  catch (error){
    console.log(error);
  }
  }


  getCurrentUSer() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  
}
