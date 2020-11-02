import * as firebase from "firebase";

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService
{
   
    constructor(private router:Router){}
     token:string='';
     
    signUp(email:string,pwd:string)
    {
     firebase.auth().createUserWithEmailAndPassword(email,pwd).catch(
       
        err=>console.log(err)
         
     )
    }
    signIn(email:string,pwd:string)
    {
       //  var provider = new firebase.auth.GoogleAuthProvider();
    //     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //     console.log("sign in call")
    //     firebase.auth().signInWithPopup(provider).then(function(result) {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //          this.token = result.credential;
    //       //  localStorage.setItem("googletoken",this.token);
    //         console.log("goofle token",this.token);
           
    //         // The signed-in user info.
    //         var user = result.user;
    //         // ...
    //       }).catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // The email of the user's account used.
    //         var email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         var credential = error.credential;
    //         // ...
    //       });
        firebase.auth().signInWithEmailAndPassword(email,pwd).then(
          
           
            (response)=>{
              
                this.router.navigate(['todo']);
                firebase.auth().currentUser.getIdToken().then((data:string) =>
                {
                    console.log("data is:",data);
                     this.token=data;
                     localStorage.setItem("token",this.token); 
                }
           
                )
                
            }
        ).catch(
            error=>console.log(error)
        )
      
    }
    getToken()
    {
        firebase.auth().currentUser.getIdToken().then(
            (token:string)=>
                {
                    this.token=token;
                    console.log("auth tokn is:",this.token);
                }
               
        )
        
        return this.token;
    }
    isAuthenticated()
    {
    
        return this.token!=null;
        
    }
    logout()
    {
        console.log("logout call");
        localStorage.removeItem("token");
        this.router.navigate(["/"]);
        firebase.auth().signOut();
        this.token=null;
        console.log("tokn logout is:",this.token)
    }
}