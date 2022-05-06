import { Injectable } from '@angular/core';
import { Auth, signOut, signInWithPopup, GoogleAuthProvider, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = user(this.auth);
  constructor(private auth: Auth) {}
  login(){
    signInWithPopup(this.auth, new GoogleAuthProvider)
      .then((result) => {
        console.log(result);
      });
  }
  logout() {
    signOut(this.auth);
  }
  // async isLoggedIn(): Promise<boolean> {
  //   return !! await this.user$.pipe(take(1)).toPromise();
  // }
}
