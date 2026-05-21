import {
  Component
  }
  from '@angular/core';
  
  import {
  EmployeeService
  }
  from '../../../../core/services/employee.service';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { AccountListComponent } from '../../../accounts/components/account-list/account-list.component';
  
  @Component({
  
  selector:'app-employee-detail',
  
  standalone:true,
  
  imports:[
  EmployeeFormComponent,
  AccountListComponent
  ],
  
  templateUrl:
  './employee-detail.component.html'
  
  })
  
  export class EmployeeDetailComponent{
  
  employee:any;
  
  constructor(
  private employeeService:
  EmployeeService
  ){}
  
  saveEmployee(data:any){
  
  this.employeeService
  .createEmployee(data)
  .subscribe(()=>{
  
  alert(
  'Employee saved'
  )
  
  })
  
  }
  
  }