import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {RoboComponent} from './robot.component'
import { OrderComponent } from "./orders/order.component";
import { NotFound } from "./shared/notFound.component";
import { HomeComponent } from "./home/home.component";
import { ProductModule } from "./products/product.module";


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'orders',component:OrderComponent},
            {path:'home',component:HomeComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:NotFound}
            
        ])
    ],
    declarations:[
        AppComponent,
        RoboComponent,
        OrderComponent,
        NotFound,
        HomeComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}