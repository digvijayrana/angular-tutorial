import { Component } from '@angular/core';
import { NgForm,FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {
  form:any
  onSubmit(f:NgForm){
    console.log(f.value)
  }

  getValue(f:NgForm){
    console.log(f)

  }
  constructor(){
    this.form = new FormGroup({
      fullName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl(),
      address: new FormControl()
    })
   
  }

}
