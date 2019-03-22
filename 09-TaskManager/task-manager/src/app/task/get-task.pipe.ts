import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './model/Task';

@Pipe({
  name: 'getTask'
})
export class GetTaskPipe implements PipeTransform {

  transform(taskId: string, parents?: Array<Task>): string {
    let foundTasks = parents.filter(parent=>taskId === parent._id);
    return !!foundTasks[0]? foundTasks[0].task: '-';
  }

}
