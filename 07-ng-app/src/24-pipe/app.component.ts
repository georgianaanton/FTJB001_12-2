import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ArUn KumAR';
  today = new Date();

  empList=[
    {empId:120, empName:'mark', empAge: 32},
    {empId:214, empName:'carl', empAge: 25},
    {empId:126, empName:'tom', empAge: 23}
  ];
}
