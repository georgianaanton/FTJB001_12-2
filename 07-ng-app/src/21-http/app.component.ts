import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstEmp = {};
  fetch;
 constructor(private http:HttpClient){
   this.fetch = this.http.get("http://dummy.restapiexample.com/api/v1/employees")
   .subscribe((res:any)=>{
     console.log(res);
     if(res.length > 0){
       this.firstEmp = res[0];
     }
    })
 }

 ngOnDestroy(){
  this.fetch.unsubscribe();
 }
}
