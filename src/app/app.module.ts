import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitsComponent } from './produits/produits.component';
import { AppRoutingModule } from './app-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import {HttpClientModule} from '@angular/common/http';
import { CatalogueService } from './services/catalogue.service';
import { FormsModule } from '@angular/forms';
import { EditProduitComponent } from './edit-produit/edit-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProduitsComponent,
    NewProductComponent,
    EditProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
CatalogueService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
