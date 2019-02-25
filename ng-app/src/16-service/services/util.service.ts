import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class Util{
    public count:number = 55;

    // greetUser(name:string):string{
    //     return "Welcome "+name;
    // }

    increaseCount(){
        this.count++;
    }
}