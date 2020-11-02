export class TaskModel
{
    public taskname;
    public isTaskDone;
 constructor( private name)
 {
     this.taskname=name;
     this.isTaskDone=false;
 }
}