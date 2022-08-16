import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Products/error/error.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { ProductListComponent } from './Products/product-list/product-list.component';

const routes: Routes = [
  // {path:"productList", component:ProductListComponent},
  {path:"productdetails/:id", component:ProductDetailsComponent},
  { path: 'templateForm', loadChildren: () => import('./template-form/template-form.module').then(m => m.TemplateFormModule) },
  {path:"", redirectTo:"productList", pathMatch:"full"},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
