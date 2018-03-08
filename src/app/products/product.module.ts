import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { ProductComponent } from "./product.component";
import { ProductFilter } from "./products-filter.pipe";
import { ProductDetail } from "./product-detail.component";
import { ProductService } from "./product.service";
import { ProductGaurd } from "./product-gaurd.service";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations:[
        ProductComponent,
        ProductFilter,
        ProductDetail
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([              
            {path:'products',component:ProductComponent},
            {path:'products/:id',canActivate:[ProductGaurd], component:ProductDetail},
        ])
    ],
    providers:[
        ProductService,
        ProductGaurd
    ]
})

export class ProductModule{}