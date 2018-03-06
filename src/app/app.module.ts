import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {RoboComponent} from './robot.component'
import { ProductComponent } from "./products/product.component";
import { ProductFilter } from "./products/products-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { ProductDetail } from "./products/product-detail.component";
import { OrderComponent } from "./orders/order.component";
import { NotFound } from "./shared/notFound.component";
import { HomeComponent } from "./home/home.component";


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    declarations:[
        AppComponent,
        RoboComponent,
        ProductComponent,
        ProductFilter,
        StarComponent,
        ProductDetail,
        OrderComponent,
        NotFound,
        HomeComponent
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        ProductService
    ]
})

export class AppModule{}