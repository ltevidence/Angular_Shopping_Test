import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProductsFromService(){
    return this.http.get("http://localhost:3000/products")
  }
  deleteProductsFromService(id:any){
    return this.http.delete("http://localhost:3000/products/" + id)
} 
  getProductFromPagination(id:any) {
    return this.http.get("http://localhost.3000/products/?_page=1&_limit=1")
  }

  addProductsFromService(productsForm: any){
    return this.http.post("http://localhost:3000/products", productsForm)
  }

  isAvailable(product:any) {
    let available = product.available;
    return this.http.patch("http://localhost:3000/products/" + product.id, {available: !available})
  }
}