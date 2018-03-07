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
import { ProductGaurd } from "./products/product-gaurd.service";


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            
            {path:'products',component:ProductComponent},
            {path:'products/:id',canActivate:[ProductGaurd], component:ProductDetail},
            {path:'orders',component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFound}
            
        ])
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
        ProductService,
        ProductGaurd
    ]
})

export class AppModule{}