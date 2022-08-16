import { Component, OnInit } from '@angular/core';
import { IProducts } from '../iproducts';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favourite-product',
  templateUrl: './favourite-product.component.html',
  styleUrls: ['./favourite-product.component.css']
})
export class FavouriteProductComponent implements OnInit {

  product?:IProducts;
  constructor(private productserv:ProductsService) { }

  allItems: IProducts[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productserv.getFavProduct().subscribe(x => {
      this.product = x;
      this.allItems.push(x);
    })
  }

}
