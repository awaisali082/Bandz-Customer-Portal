import {
    Component,
    OnInit
  } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  
  @Component({
    selector: 'forgotpassword',
    styleUrls: ['./forgotpassword.style.css'],
    templateUrl:'./forgotpassword.template.html'
  })
  export class forgotpasswordComponent{
    public localState: any;
    public Update:boolean=true;
    public forgot:boolean=false;
    public forgotPassword:boolean=false;
    constructor(
      public route: ActivatedRoute
    ) {

      
    }
  }