import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productos } from '../../../productos';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  productos;
  producto;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idproducto = Number(params.get('productoID')) - 1;
      this.producto = productos[idproducto];
    });
  }

}
