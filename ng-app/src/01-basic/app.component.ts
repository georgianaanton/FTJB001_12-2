import { Component } from '@angular/core';

@Component({
    selector: 'my-selector-name',
    template: `<h1>Hello Basic angular app</h1>`
})
export class AppComponent{
    constructor(){
        console.log("it is angular app")
    }
}