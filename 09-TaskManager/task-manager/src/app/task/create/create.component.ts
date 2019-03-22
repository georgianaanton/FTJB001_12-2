import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  task:Task = new Task();
  finishedOptions:Array<string> = ['NO', 'YES'];
  finishedSelectedValue:string = "NO";
  
  public selectedParent: Task;
  parents:Array<Task> = [];
  search;
  formatter;
  
  constructor(private taskService:TaskService, private router:Router) { }

  ngOnInit() {
    this.fetch();
    this.getTypeahead();
  }

  create(){
    this.task.finished = this.finishedSelectedValue === "YES"?true:false;
    this.task.start_date = new Date(`${this.task.start_date["year"]}-${this.task.start_date["month"]}-${this.task.start_date["day"]}`)
    this.task.end_date = new Date(this.task.end_date["year"], this.task.end_date["month"]-1, this.task.end_date["day"]);
    this.task.parent_id = this.selectedParent._id;
    console.log(this.task);

    this.taskService.create(this.task)
      .subscribe((res:any)=>{
        console.log(res);
        if(res.success == true){
          this.router.navigate(['/', 'view']);
        } else {
          alert("some error occurred...");
        }
      })
  }

  fetch(){
    this.taskService.fetch()
    .subscribe((res:any)=>{
      console.log(res);
      if(res.success == true){
        this.parents = res.data;
      } else {
        console.log(res.message);
      }
    })
  }

  getTypeahead(){
    this.search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.parents.filter(parent => parent.task.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  this.formatter = (taskObj: Task) => taskObj.task;
  }

}
