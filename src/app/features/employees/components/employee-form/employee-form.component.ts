import {
  Component,
  Input,
  Output,
  EventEmitter
  }
  from '@angular/core';
  
  import {
  CommonModule
  }
  from '@angular/common';
  
  import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
  }
  from '@angular/forms';
  
  @Component({
  
  selector:'app-employee-form',
  standalone:true,
  
  imports:[
  CommonModule,
  ReactiveFormsModule
  ],
  
  templateUrl:'./employee-form.component.html'
  
  })
  
  export class EmployeeFormComponent{
  
  @Input()
  employee:any;
  
  @Output()
  submitForm=
  new EventEmitter();
  
  constructor(
  private fb:FormBuilder
  ){}
  
  employeeForm=
  this.fb.group({
  
  firstName:[
  '',
  Validators.required
  ],
  
  lastName:[
  '',
  Validators.required
  ],
  
  email:[
  '',
  [
  Validators.required,
  Validators.email
  ]
  ],
  
  role:[
  '',
  Validators.required
  ],
  
  status:[
  '',
  Validators.required
  ]
  
  })
  
  submit(){
  
  if(
  this.employeeForm.valid
  ){
  
  this.submitForm.emit(
  this.employeeForm.value
  )
  
  }
  
  }
  
  }