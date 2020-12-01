import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { productos } from '../productos';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductModel[];

  constructor() {
    this.products = productos;
  }

  public getAllProducts(): ProductModel[] {
    return this.products;
  }

  public getProductById(id: number | string ): ProductModel {
    return this.products.find((product: ProductModel) => product._id.toString() === id);
  }
}
