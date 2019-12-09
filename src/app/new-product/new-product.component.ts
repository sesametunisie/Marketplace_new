import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
import { produits } from '../Model/produit.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  private currentproduit: produits;
  private mode:number=1;

  constructor(private catservice:CatalogueService, private router:Router) { }

  ngOnInit() {
  }

  Onsaveproduit(data:any)

  {
this.catservice.saveressource(this.catservice.host + "/produits", data)
.subscribe(res=>{
  //this.router.navigateByUrl("/produits")
  this.currentproduit=res;
  this.mode=2;
},err=>{console.log(err)})

 
  }

  OnewProduis()
  {
this.mode=1;

  }

}
