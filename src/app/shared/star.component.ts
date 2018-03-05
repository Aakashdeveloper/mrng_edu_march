import {Component,OnChanges,Input,
        Output,EventEmitter} from '@angular/core';

@Component({
    selector:'edu-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth = this.rating*86/5
    }

    onStar():void{
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`)
    }
}

/*
var a = "hiiiii"
var c = a + "aakash"

var c = (`hiiiiii ${a}`)

var add = (a,b) =>a+b;

var sum = add(3,4)
*/