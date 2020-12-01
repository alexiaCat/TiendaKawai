import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerModule } from '../customer.module';
import { CustomerModel } from '../../../models/customer.model';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService],
})
export class RegisterComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CustomerService,
    private authSvc: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    this.FormBuilding();
  }

    // tslint:disable-next-line: typedef
    FormBuilding(){
    this.fgValidator = this.fb.group({
      document: ['', [Validators.required, Validators.minLength(9)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      telephone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]],
      inputCity: ['', [Validators.required]],
      inputState: ['', [Validators.required]],
    });
    }

    // tslint:disable-next-line: typedef
    async CustomerRegisterFn() {
      if (this.fgValidator.invalid) {
        alert('Complete todos los campos');
      } else {
        const { email, password } = this.fgValidator.value;
        try {
         const user = await this.authSvc.register(email, password);
         if(user){
          this.router.navigate(['/home']);
         }
        } catch (error) {
          console.log(error);
        }
        
      }
    }

  getCustomerData(): CustomerModel {
    const model = new CustomerModel();
    model.address = this.fgv.address.value;
    model.name = this.fgv.name.value;
    model.lastname = this.fgv.lastname.value;
    model.document = this.fgv.document.value;
    model.email = this.fgv.email.value;
    model.telephone = this.fgv.telephone.value;
    model.inputCity = this.fgv.inputCity.value;
    model.password = this.fgv.password.value;
    model.inputState = this.fgv.inputState.value;
    return model;
  }
    // tslint:disable-next-line: typedef
    get fgv() {
    return this.fgValidator.controls;
    }
}
