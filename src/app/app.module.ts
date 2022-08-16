import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductCardComponent } from './Products/product-card/product-card.component';
import { FavouriteProductComponent } from './Products/favourite-product/favourite-product.component';
import { ProductCartComponent } from './Products/product-cart/product-cart.component';
import { SlicePipePipe } from './Products/slice-pipe.pipe';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { ErrorComponent } from './Products/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    TodoComponent,
    ProductListComponent,
    ProductCardComponent,
    FavouriteProductComponent,
    ProductCartComponent,
    SlicePipePipe,
    ProductDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
