import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  form;
  _id: number;
  items = [];
  message;
  total = 0;
  constructor(private cart: CartService, private formulario: FormBuilder) {
    this.form = this.formulario.group({
      name: '',
      mail: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cart.listCart();
    console.log(this.items);
  }

  // tslint:disable-next-line: typedef
  cleanCart() {
    this.cart.cleanCart();
  }

  // tslint:disable-next-line: typedef
  deleteProduct(_id) {
    this.cart.deleteProduct(_id);
  }
}
