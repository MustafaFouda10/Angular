import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducts } from '../iproducts';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productsData!:IProducts; // ! ==> identifies the object, it looks like (= new obj())
  @Input() showBack: boolean = false;
  @Output() onProductSelected = new EventEmitter<IProducts>();

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  addToFavourite(){
    this.onProductSelected.emit(this.productsData);
  }

  // subject
    //receive subject data from service
  sendProduct() {
    this.productService.addProduct(this.productsData); // products data should be identified by (!) or (= new ---())
  }
  
  sendFavProduct() {
    this.productService.addFavProduct(this.productsData);
  }

}
