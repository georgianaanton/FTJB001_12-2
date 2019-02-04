import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // template: `app.component1.html`,
    templateUrl: `app.component.html`,
    styleUrls: [`app.component.css`]
})
export class AppComponent{
    constructor(){
        console.log("js logic is here")
    }
}