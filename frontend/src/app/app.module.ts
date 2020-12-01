import { environment } from './../environments/environment'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './public/home/default/default.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './modules/products/product-card/product-card.component';
import { ShoppingCartComponent } from './modules/customer/shopping-cart/shopping-cart.component';
import { allowedNodeEnvironmentFlags } from 'process';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ProductCardComponent,
    ShoppingCartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  exports: [
    ProductCardComponent,
    ShoppingCartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
