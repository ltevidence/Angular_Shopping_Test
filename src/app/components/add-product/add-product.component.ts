import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  show:boolean=false;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }
// Methode d'enregistrement de produits

  addProducts(productsForm:any) {
    let productValue = productsForm.value
    this.productService.addProductsFromService(productValue).subscribe(() =>{
      this.show=true;
    })
  }
}
