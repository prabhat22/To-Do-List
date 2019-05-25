import { Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { TaskModel } from './task-model';

export class ListService
{
    public TaskList=[new TaskModel("GO To Gym"),new TaskModel("Study"),new TaskModel("Gaming")];

    @Output() listChanged=new Subject();
    
    getList()
    {
        return this.TaskList.slice();
    }
    updateList(record)
    {
        this.TaskList.push(record);
        this.listChanged.next(this.TaskList.slice());
    }
    deleteTask(index)
    {
     this.TaskList.splice(index,1);
     this.listChanged.next(this.TaskList.slice());
    }
    taskDone(index)
    {
        this.TaskList[index].isTaskDone=true;
        this.listChanged.next(this.TaskList.slice());   
    }
    loadList(record)
    {
        this.TaskList=record;
        this.listChanged.next(this.TaskList.slice());  

    }
}