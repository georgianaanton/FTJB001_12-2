import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  host:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  fetch(){
    return this.http.get(this.host+'/tasks/tasks', {});
  }

  create(task:Task){
    return this.http.post(this.host+'/tasks/tasks', task, {});
  }
}
