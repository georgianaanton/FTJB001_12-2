import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('myAnimation', [
      state('state-1', style({
        transform: 'scale(.5) translateX(100px)'
      })),
      state('state-2', style({
        transform: 'scale(1) translateX(0px)'
      })),
      transition("state-1=>state-2", animate("5000ms ease-in")),
      transition("state-2=>state-1", animate("5000ms ease-in"))
    ])
  ]
})
export class AnimationComponent {

  myState:string = "state-1";
  constructor() { }

  increase(){
    this.myState = "state-2";
  }
  decrease(){
    this.myState = "state-1";
  }

}
