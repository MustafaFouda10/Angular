import { Component, OnInit } from '@angular/core';
import { IProducts } from '../iproducts';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  //subject
  product?:IProducts;
  allItems: IProducts[] = [];
  constructor(private prodService:ProductsService) { }

  ngOnInit(): void {
    this.prodService.getProduct().subscribe(x => {
      this.product = x;
      this.allItems.push(x);
    })
  }

}
