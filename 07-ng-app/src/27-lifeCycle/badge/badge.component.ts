import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent implements OnInit {

  @Input()
  count:number = 55;
  @Input() dates:Array<Date>;

  constructor() { 
    console.log("It is badge constructor")
  } 

  ngOnChanges(changeObj){
    console.log("it is changes");
    console.log(changeObj)
  }

  ngDoCheck(){
    console.log("do check in badge")
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("It is badge destroyer")
  }


}
