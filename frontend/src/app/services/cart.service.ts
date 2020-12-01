import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productos } from '../productos';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  productos = productos;
  items = [];
  url = "/";

  constructor(private http:HttpClient) { }

  addtoCart(producto) {
    let encontrado = false;

    this.items.forEach((elemento) => {
      if (elemento._id == producto._id) {
        encontrado = true;
        elemento.cantidad += 1;
      }
    });

    if (!encontrado) {
      this.items.push(producto);
    }
  }

  deleteProduct(_id) {
    const resultado = this.items.findIndex(e => e, _id == _id);
    this.items.splice(resultado, 1);
    return this.items;
  }

  cleanCart() {
    this.items = [];
    return this.items;
   }

  listCart() {
    return this.items;
   }

  savedata(datos) {
    return this.http.post(`${this.url}guardar.php`, JSON.stringify(datos));
  }
}
