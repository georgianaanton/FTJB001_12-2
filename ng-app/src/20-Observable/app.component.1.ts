import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stream = new Observable(function(obs){
    
    let timeoutId = setTimeout(function(){
    // send ajax req, pass res data
      console.log("After 5 secs")
      obs.next(112255);
      obs.next(254);
      obs.next("hello users");
      // obs.error();
      // obs.complete();
      obs.next(999);
    }, 2000)

    return function(){
      clearTimeout(timeoutId);
    }
    
  })

  disposable = this.stream.subscribe((value)=>{
    console.log(value)
  })

  constructor(){
    setTimeout(()=>{
      console.log("done");
      this.disposable.unsubscribe();
    }, 1000)

  }
}
