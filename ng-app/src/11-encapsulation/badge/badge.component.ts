import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  // encapsulation: ViewEncapsulation.Emulated // default
  // encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class BadgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
