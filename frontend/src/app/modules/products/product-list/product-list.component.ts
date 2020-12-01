import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { productos } from '../../../productos';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productos = productos;

  constructor(private cart: CartService) {
  }
  ngOnInit(): void {
  }

  addtoCart(producto) {
    this.cart.addtoCart(producto);
  }
}
