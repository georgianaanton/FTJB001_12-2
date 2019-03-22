import { Component } from '@angular/core';

@Component({
    selector:"my-image",
    templateUrl:'my-image.component.html',
    styleUrls:['my-image.component.css']
})
export class MyImageComponent{
    constructor(){
        console.log("image component");
    }
}