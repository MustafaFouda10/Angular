import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  myForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    description: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  
  });

  constructor() { }

  ngOnInit(): void {
  }

  get title(){
    return this.myForm.get('title') as FormControl
  }

}
