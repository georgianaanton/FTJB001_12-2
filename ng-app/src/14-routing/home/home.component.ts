import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string = "default";
  constructor(private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((param:any)=>{
      this.name = param['name'] || 'unknown';
    })

    // activatedRoute.params.subscribe(function(param:any){
    //   this.name = param['name'] || 'unknown';
    // }.bind(this))

   }

  ngOnInit() {
  }

}
