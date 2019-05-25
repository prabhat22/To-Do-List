import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';

import { ToDoComponent } from './todo/todo.component';

const route:Routes=
[
    {
        path:"",
        component:AuthComponent
    },
    {
        path:"todo",
        component:ToDoComponent
    },
   

]
@NgModule(
    {
        imports:[RouterModule.forRoot(route)],
        exports:[RouterModule]
    }
)
export class AppRoutingModule
{}