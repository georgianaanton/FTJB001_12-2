import { Component, OnInit } from '@angular/core';
import { Util } from '../services/util.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private utilService:Util) { }

  ngOnInit() {
  }

}
