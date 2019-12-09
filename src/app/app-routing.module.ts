import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

const routes: Routes = [
  {
    path:"produits", component: ProduitsComponent
  },
  {
  
    path:"new-products", component: NewProductComponent

  },
{
  path:"", redirectTo:"/produits", pathMatch: 'full'

},

{
  path:"edit-produit/:id", component: EditProduitComponent

}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]

})
export class AppRoutingModule { }
