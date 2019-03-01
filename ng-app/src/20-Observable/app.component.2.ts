import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stream = new Observable(function(obs){
    
    let count = 0;
    let timeoutId = setInterval(function(){
      obs.next(count++);
    }, 2000)

    return function(){
      clearInterval(timeoutId);
    }
    
  })

  disposable = this.stream.subscribe((value)=>{
    console.log(value)
  })

  constructor(){
    setTimeout(()=>{
      console.log("done");
      // this.disposable.unsubscribe();
    }, 1000)

  }

  cancel(){
    this.disposable.unsubscribe();
    console.log("Canceled")
  }
}
