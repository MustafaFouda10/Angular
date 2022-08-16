import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducts } from '../iproducts';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // @Output() onPrdSelected = new EventEmitter<IProducts>();

  constructor(private prdService: ProductsService) { }

  prdList?:IProducts[];
  product?:IProducts;

  ngOnInit(): void {
    this.prdList = this.prdService.getAllProducts();
  }

  getSelectedProduct(event:any){
    this.product = event;
  }

}
