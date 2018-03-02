import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {AppComponent} from './app.component';
import {RoboComponent} from './robot.component'
import { ProductComponent } from "./products/product.component";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
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