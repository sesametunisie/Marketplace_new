import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public produits:any;
  public page:number=0;
  public size:number=3;
  public TotalPages:number;
 public pages:Array<number>;
 public motcle:string="";
  constructor(private catservice:CatalogueService, private router:Router) { }

  ngOnInit() {
    this.onGetproduits();
  }


  onGetproduits()
  {
  this.catservice.getproduits(this.page,this.size).subscribe(data=>{
this.TotalPages=data["page"].totalPages;
this.pages= new Array<number>(this.TotalPages);
this.produits=data
},err=>{console.log(err);

}

)


  }

  onPageproduct(x)

  {this.page=x;

  this.Chercherproduit();


  }

  OnChercher(form:any){
    this.motcle=form.mot_cle;
    this.page=0;
    this.Chercherproduit();


  }

  Chercherproduit(){
  this.catservice.getproductbykey(this.motcle,this.page,this.size).subscribe(data=>{
    this.TotalPages=data["page"].totalPages;
    this.pages= new Array<number>(this.TotalPages);
    this.produits=data
    },err=>{console.log(err);
    
    }

    )
    
    
      }
      onDeleteproduct(P){

      
        let conf=confirm("êtes vous sûre?");
        if (conf)
        this.catservice.deleteressource(P._links.self.href)
        .subscribe(data=>{
             this.Chercherproduit();
        },err=>{console.log(err)})
 
      }

      onEditproduct(p)
      {
        let url=p._links.self.href

        this.router.navigateByUrl("/edit-produit/"+btoa(url));
      }
      



    }