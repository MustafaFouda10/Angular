import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../iproducts';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
}) 
export class ProductDetailsComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private productservice:ProductsService) { }

  productid:number=0;
  product!:IProducts;

  ngOnInit(): void {
    this.activeroute.params.subscribe(n=>{
      this.productid = n['id'];
      this.product = this.productservice.getProductById(this.productid);
    })
  }

}
