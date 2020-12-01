import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  // tslint:disable-next-line: typedef
  FormBuilding() {
    this.fgValidator = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
    });
  }

  PasswordResetCustomerFn() {
    if (this.fgValidator.invalid) {
      alert('Complete todos los campos');
    }
  }
  
  get fgv() {
    return this.fgValidator.controls;
  }
}