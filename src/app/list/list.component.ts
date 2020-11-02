import { Component } from "@angular/core";
import { OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListService } from './list.service';
import { TaskModel } from './task-model';

@Component(
    {
        selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
    }
)
export class ListComponent implements OnInit
{
    @ViewChild('f') form:NgForm;
    taskList={};
    
     constructor(private listService:ListService){console.log("list compo call")};
    ngOnInit()
    {
   
    this.listService.listChanged.subscribe(
        (result)=>
        {
            this.taskList=result;
        }
    )
    this.taskList=this.listService.getList();
    console.log(this.taskList);
      
    }
    onSubmit(form:NgForm)
    {
        // console.log(form.value)
        // console.log("add:"+form.value.name);
        var obj=new TaskModel(form.value.name);
        this.listService.updateList(obj);
    }
    onDelete(index)
    {
        this.listService.deleteTask(index);
    }
    onDone(index)
    {
       this.listService.taskDone(index);
    }
}