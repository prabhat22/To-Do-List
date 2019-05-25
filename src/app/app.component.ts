import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 ngOnInit()
 {
 firebase.initializeApp(
   {
    apiKey: "AIzaSyBVou3dVMPT0QAcoU0UE_lufJouKjPvVoY",
    authDomain: "to-do-22cb9.firebaseapp.com",
   }
 )

 }
}
