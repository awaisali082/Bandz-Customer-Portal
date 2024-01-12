import {
    Component,
    OnInit
  } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
 // import { UserService } from './../../../services/user.service';
  @Component({
    selector: 'login',
	templateUrl: './login.component.html',
    styleUrls: ['./login.style.css'],
 
  })
  export class LoginComponent{
    public localState: any;
    public email:String;
    public name:String;
    public password:String;
    constructor(
      public route: ActivatedRoute,
    ) {
      this.localState=ActivatedRoute;
    }
    login()
    {
      
        //this._loginService.login(this.email, this.password).subscribe(
          //response => {
          //  console.log(response);

console.log(response.message);
         //   localStorage.setItem("UserType", response.data.UserType);

//            console.log(localStorage.getItem("UserType"));
        
          //  this.localState.navigate(["/app/dashboard"]);

          });
      }
    }
  