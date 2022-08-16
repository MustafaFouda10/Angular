import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Products/iproducts';
import { ProductsService } from 'src/app/Products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  product?:IProducts;
  allItems: IProducts[] = [];

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(x => {
      this.product = x;
      this.allItems.push(x);
    })
  }

}
