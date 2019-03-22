import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <p>Hello angular</p>
        <h1>Hello Friends
    `,
    styles: [`
        p{
            color:red
        }
        h1{
            text-align:center
        }
    `]
})
export class AppComponent{
    constructor(){
        console.log("js logic is here")
    }
}