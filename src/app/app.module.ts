import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RoboComponent} from './robot.component'
import { ProductComponent } from "./products/product.component";

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent,
        RoboComponent,
        ProductComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}