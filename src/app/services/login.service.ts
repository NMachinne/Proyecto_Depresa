import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  checked=false;
  user!: SocialUser;
  loggedIn!: boolean;
  originalPath!:string;
  private dbPath = '/users';
  notesRef!: AngularFirestoreCollection<any>;

  constructor(private authService: SocialAuthService,
    private router:Router,private db: AngularFirestore,private local: LocalstorageService) {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        this.local.remove('user');
        this.local.set('user',user);
       
        if(this.originalPath){  
          this.router.navigate([this.originalPath]);
          this.originalPath='';
        }else
          this.router.navigate(['']);
      }else{
        this.router.navigate(['/login']);
      }
    });
   }
  isAuth():boolean{
    return this.loggedIn;
  }
  
  async refreshToken(): Promise<void> {
   // return this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  /*
  async signInWithGoogle():Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }*/
  async signOut(): Promise<void> {
    return await this.authService.signOut();
  }
}
