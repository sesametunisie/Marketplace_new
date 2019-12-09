import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { produits } from '../Model/produit.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CatalogueService {

  constructor(private httpClient:HttpClient) {}

   public host:String="http://localhost:8080"
  
   public getproduits (page:number,size:number){

    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }

  public getproductbykey(mc:string,page:number,size:number)
  {

    return this.httpClient.get(this.host+"/produits/search/recherchepage?mc="+mc+"&page="+page+"&size="+size);
  }

  public deleteressource(url)

  {
    return this.httpClient.delete(url);

  }

  public saveressource(url,data):Observable<produits>{

    return this.httpClient.post<produits>(url,data);
  }
  public getressource(url):Observable<produits>{

    return this.httpClient.get<produits>(url);
  }

  public editressource(url,data):Observable<produits>{

    return this.httpClient.put<produits>(url,data);
  }

}
