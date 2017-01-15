import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productTitle: string = 'Product list';
    productWidth: number = 50;
    productMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {
    }

    toogleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(
                    products => this.products = products,
                    error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        //console.log('Clicked ' + message);
        this.productTitle = 'Product List: ' + message;
    }
}
