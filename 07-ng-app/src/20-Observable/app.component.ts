import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // observer = {
  //   next: function(){},
  //   complete: function(){},
  //   error: function()
  // }
  source = Observable.create(observer=>{
    observer.next(1);
    observer.next(2);
    // observer.complete();
    observer.error(Error("database is not running"))
    observer.next(3);
  })
  
  constructor(){
    
    this.source.subscribe((res)=>{
      console.log("OnNext: ", res)
    }, (err)=>{
      console.log("OnError: ", err)
    }, ()=>{
      console.log("OnComplete")
    })
  }

 
}
