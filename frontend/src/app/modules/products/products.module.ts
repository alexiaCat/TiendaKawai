import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { QualifierComponent } from './qualifier/qualifier.component';
import { DetailProductComponent } from './detail-product/detail-product.component';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent, QualifierComponent, DetailProductComponent]
})
export class ProductsModule { }
