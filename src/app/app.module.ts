import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import {TitleComponent} from '../app/title/title.component';
import { ListComponent } from 'src/app/list/list.component';
import { ListService } from 'src/app/list/list.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './route.module';
import { ToDoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    ListComponent,
    AuthComponent,
    ToDoComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

 
  
  ],
  providers: [ListService,AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
