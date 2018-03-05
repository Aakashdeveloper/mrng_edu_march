import {Component, OnInit} from '@angular/core';
import {IProduct} from './products'

@Component({
    selector:'product-list',
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

    constructor(){}
    products:IProduct[]=[
        {  
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.5,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ]

    toggleImage():void{
        this.ShowImage = !this.ShowImage
    }

    ngOnInit():void{
        console.log("<<<<<<<<<<<<<<this is init<<<<<<<<<<<<<")
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
*/
