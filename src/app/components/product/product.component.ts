import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:any;
show:boolean=false;
nextPage:boolean=false;
  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.getProductsFromProduct();
  }

  getProductsFromProduct(){
    this.productsService.getProductsFromService().subscribe(data =>{
      this.products = data;
      console.log(this.products);
    })
  };
  deleteProductsFromProducts(id:any){
    this.productsService.deleteProductsFromService(id).subscribe(()=>{
      this.getProductsFromProduct();
      this.show=true;
    })
    };
  getProductFromPaginationFromProduct(id:any){
    this.productsService.getProductFromPagination(id).subscribe(()=>{
      this.getProductsFromProduct();
      this.nextPage=true;
    })
  };

  isAvailableFromProducts(product: any){
    this.productsService.isAvailable(product).subscribe(()=>{
      this.getProductsFromProduct();
      console.log("Availability changed")
    })
  }
}
