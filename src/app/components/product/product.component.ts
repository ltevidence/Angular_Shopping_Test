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
modifyProductAlert:boolean=false;


newProduct = {
  title: "",
  description: "",
  image: "",
  price: 0,
  available: false
}

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.getProductsFromProduct();
  }

  getProductsFromProduct(){
    this.productsService.getProductsFromService().subscribe(data =>{
      this.products = data;
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
  searchProducts(search:any) {
    let range = search.value;
    this.productsService.searchByRangePrice(range).subscribe(data =>{
      this.products = data;
      console.log(search.value)
    })
  }

  searchKeywords(searchKeyword: any){
    let keyword = searchKeyword.value.keyword;
    this.productsService.searchByKeywordsService(keyword).subscribe(data =>{
      this.products = data;
      console.log(searchKeyword);
    })
  }

  editProduct(formData:any){
   this.newProduct = formData;
  }

  modifyProduct(newProduct:any){
    this.productsService.updateProduct(newProduct).subscribe(()=>{
      
      console.log(this.newProduct);
      this.modifyProductAlert=true;
    })
  }
}
