import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data.service';


@Component(
    {
        selector:'app-header',
        templateUrl:'./header.component.html'
    }
)
export class HeaderComponent
{
    constructor(private authService:AuthService,private dataService:DataService)
    {

    }
    onSave()
    {
        this.dataService.storeTask().subscribe(
            (response:Response)=>
            {
              console.log("response is:",response);
            },
            (error:Response)=>
            {
              console.log("err is:",error);
            }
          )
    }
    onFetch()
    {
        this.dataService.loadTask();
    }
    onLogout()
    {
        this.authService.logout();
    }

}