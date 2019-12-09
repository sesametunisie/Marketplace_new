import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import { produits } from '../Model/produit.model';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  private currentproduit:produits;
  private url:String;

  constructor(private router:Router, private activatedRoute:ActivatedRoute,private catservice:CatalogueService) { }

  ngOnInit() {
    this.url=atob(this.activatedRoute.snapshot.params.id)
   this.catservice.getressource(this.url)
   .subscribe(data=>{
    //this.router.navigateByUrl("/produits")
    this.currentproduit=data;
  },err=>{console.log(err)})
  
  }

  Onupdateproduit(value)

  {
    this.catservice.editressource(this.url,value)
    .subscribe(data=>{
     alert("mise a jour effectuée avec succes");
     this.router.navigateByUrl("/produits")
    },err=>{console.log(err)})
    

  }

}
