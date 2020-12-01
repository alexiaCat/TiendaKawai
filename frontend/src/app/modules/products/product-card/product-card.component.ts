import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html' ,
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: ProductModel;
  public products: ProductModel[];

  constructor(private router: Router, private productService: ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  public getUrl(): string {
    return this.router.url;
  }
}
