import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../model/Task';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  tasks: Array<Task> = [];
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.fetch()
      .subscribe((res:any)=>{
        console.log(res);
        if(res.success == true){
          this.tasks = res.data;
        } else {
          console.log(res.message);
        }
      })
  }

}
