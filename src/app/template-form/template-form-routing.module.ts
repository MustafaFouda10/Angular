import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AllDataComponent } from './all-data/all-data.component';
import { LoginComponent } from './login/login.component';
import { TemplateFormComponent } from './template-form.component';

const routes: Routes = [
  { path: '', component: TemplateFormComponent },
  {path: 'login' , component: LoginComponent},
  {path: 'newproduct' , component: AddProductComponent},
  {path: 'alldata' , component: AllDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFormRoutingModule { }
