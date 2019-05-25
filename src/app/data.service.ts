import { Injectable } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { ListService } from './list/list.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class DataService
{
constructor(private  http:HttpClient,private authService:AuthService,private listService:ListService )
{}
storeTask()
{
    var token=localStorage.getItem("token");
    console.log("data servce tokn:",token)
    if(token!=null)
return this.http.put("https://to-do-22cb9.firebaseio.com/response.json?auth="+token,this.listService.getList());
}
loadTask()
{
    var token=localStorage.getItem("token");
     return this.http.get("https://to-do-22cb9.firebaseio.com/response.json?auth="+token).subscribe(
         (response)=>
         {
             console.log("fetch reposne is:"+response);
             this.listService.loadList(response);
         }
     )
}
}