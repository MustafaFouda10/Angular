import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormRoutingModule } from './template-form-routing.module';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { AllDataComponent } from './all-data/all-data.component';


@NgModule({
  declarations: [
    TemplateFormComponent,
    LoginComponent,
    AddProductComponent,
    AllDataComponent
  ],
  imports: [
    CommonModule,
    TemplateFormRoutingModule,
    FormsModule, // for template forms
    ReactiveFormsModule, // for reactive forms
    HttpClientModule, // to get data from foreign api
  ]
})
export class TemplateFormModule { }
