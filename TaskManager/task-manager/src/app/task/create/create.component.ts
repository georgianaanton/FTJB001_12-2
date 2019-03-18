import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  task:Task = new Task();
  constructor(private taskService:TaskService, private router:Router) { }

  ngOnInit() {
  }

  createTask(){
    console.log(this.task);
    this.taskService.create(this.task)
      .subscribe((res:any)=>{
        console.log(res);
        if(res.success == true){
          this.router.navigate(['/', 'view'])
        } else {
          alert("some error occurred...")
        }
      })
  }

}
