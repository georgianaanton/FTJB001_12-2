import { Component } from '@angular/core';

@Component({
    selector:"my-badge",
    templateUrl:'my-badge.component.html',
    styleUrls:['my-badge.component.css']
})
export class MyBadgeComponent{
    constructor(){
        console.log("badge component");
    }
}