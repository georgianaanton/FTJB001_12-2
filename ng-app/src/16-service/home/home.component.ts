import { Component, OnInit } from '@angular/core';
import { Util } from '../services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private utilService:Util){ }

  ngOnInit() {
  }

  increase(){
    this.utilService.increaseCount();
  }



}
