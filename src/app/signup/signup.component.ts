import {
    Component,
    OnInit,
    ElementRef,
    ViewChild
  } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  
  @Component({
    selector: 'signup',
    styleUrls: ['./signup.style.css'],
    templateUrl:'./signup.template.html'
  })
  export class SignupComponent{
    public localState: any;
    @ViewChild('myFileInputIdentifier') myFileInputIdentifier:ElementRef;
    constructor(
      public route: ActivatedRoute,
      private elementref: ElementRef
    ) {}



    onAction(event){
        console.log(event);
    }

  }