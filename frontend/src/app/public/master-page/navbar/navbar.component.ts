import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService],
})
export class NavbarComponent {

  public user$: Observable<any> = this.authSvc.afAuth.user;
  role = 1;
  public logo: string;

  subscription: Subscription;
  constructor(private service: SecurityService, private authSvc: AuthService, private router: Router) {
    this.logo = 'https://www.flaticon.es/svg/static/icons/svg/679/679948.svg';
   }

  async onLogout(){
    try {
     await this.authSvc.logout();
     this.router.navigate(['/security/login']);
    } catch (error) {
      console.log(error);
    }
    
  }

}

