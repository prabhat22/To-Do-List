import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent
{
  @ViewChild('logForm') form:NgForm;
  @ViewChild('regForm') regForm:NgForm;
    constructor(private authService:AuthService){}
  onSubmit(form:NgForm)
  {
    console.log(form.value)
    console.log(form.value.email+form.value.pwd);
    this.authService.signIn(form.value.email,form.value.pwd);

  }
  onReg(form:NgForm)
  {
    console.log(this.regForm.value)
    console.log(this.regForm.value.signEmail+this.regForm.value.signPwd);
    this.authService.signUp(this.regForm.value.signEmail,this.regForm.value.signPwd);
  }
    
}