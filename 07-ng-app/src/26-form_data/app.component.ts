import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { bypassSanitizationTrustStyle } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  myForm: FormGroup;
  // genders:Array<string> = ['male', 'female'];
  genders:string[] = ['male', 'female'];

  constructor(){

    this.myForm = new FormGroup({
      "student" : new FormGroup({
        "name" : new FormControl("", [
          Validators.required,
          Validators.pattern("[a-zA-z\s]{4,10}")
        ]),
        "email" : new FormControl(),
        "password" : new FormControl(),
        "gender": new FormControl(this.genders[0])
      }),
      "subjects": new FormArray([new FormControl({value:'Computer', disabled: true}, [Validators.required])])
    })

  }


  addSub(){
    (<FormArray>this.myForm.controls.subjects).push(new FormControl({value:'...', disabled: false}, [Validators.required]))
  }

  addStudent(){
    console.log(this.myForm)
  }
}
