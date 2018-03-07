import {Component, OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from './product.service';

@Component({
    templateUrl:'./product.component.html',
    //styles:['thead{color:skyblue}','h3{color:red}']
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{
    title:string="***Product List***";
    showHide=true;
    ShowImage=false;
    filterProduct;
    imgWidth=50;
    errorMessage:string;

    constructor(private _productService:ProductService){}
    products:IProduct[]

    toggleImage():void{
        this.ShowImage = !this.ShowImage
    }

    ngOnInit():void{
       this._productService.getProducts()
            .subscribe((data)=> this.products= data,
                        (error)=>this.errorMessage=<any>error);
    }

    onRatingClicked(message:string){
        this.title = "Produc list >>>>>>>>"+message
    }
}



/*
string
number
boolean
One Way Binding
--Data Binding{{}}
--Property Binding[]
--Event Binding()
Two Way Binding[()]


A coding pattern in which a class receives the instances of object it need from
extrenal source rather  than creating it.

Service

*/
