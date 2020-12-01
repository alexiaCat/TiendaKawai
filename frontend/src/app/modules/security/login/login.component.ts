import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { SecurityService } from 'src/app/services/security.service';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: SecurityService,
    private authSvc: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  // tslint:disable-next-line: typedef
  FormBuilding() {
    this.fgValidator = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  async onGoogleLogin(){
    try {
      const user = await this.authSvc.loginGoogle();
      if(user){
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
    }

  }
  // tslint:disable-next-line: typedef
  async LoginCustomerFn() {
    
      const { email, password } = this.fgValidator.value;
      try {
        const user = await this.authSvc.login(email, password);
        if(user){
          this.router.navigate(['/home']);
        }
      } catch (error) {
        console.log(error);
      } 
    
  }
  getLoginData(): UserModel {
    const model = new UserModel();
    model.email = this.fgv.email.value;
    model.password = (this.fgv.password.value).toString();
    return model;
  }
  // tslint:disable-next-line: typedef
  get fgv() {
    return this.fgValidator.controls;
  }
}
