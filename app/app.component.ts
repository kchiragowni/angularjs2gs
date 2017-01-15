import { Component } from '@angular/core';
// import { routerLink } from '@angular/forms'
import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <a class="navbar-brand">{{pageTitle}}</a>
                        <ul class="nav navbar-nav">
                            <li><a [routerLink]="['/welcome']">Home</a></li>
                            <li><a [routerLink]="['/products']">Product list</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    providers: [ProductService]
})
export class AppComponent {
    pageTitle: string = 'ACME Product Management';
 }
