import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../../../core/services/employee.service';
import { Employee } from '../../../../core/models/employee.model';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';

@Component({

selector:'app-employee-list',
standalone:true,
imports:[
CommonModule,
FormsModule,
EmployeeFormComponent
],
templateUrl:'./employee-list.component.html',
styleUrls:['./employee-list.component.scss']

})

export class EmployeeListComponent implements OnInit{

employees:Employee[]=[];
filteredEmployees:Employee[]=[];

searchText='';
employee: any;

constructor(
private employeeService:EmployeeService,
private router:Router
){}

ngOnInit(){

this.loadEmployees();

}

loadEmployees(){

this.employeeService
.getEmployees()
.subscribe(res=>{

this.employees=res;
this.filteredEmployees=res;

})

}

filterEmployees(){

const value=this.searchText.toLowerCase();

this.filteredEmployees=
this.employees.filter(emp=>

emp.firstName.toLowerCase().includes(value)
||
emp.lastName.toLowerCase().includes(value)
||
emp.email.toLowerCase().includes(value)
||
emp.role.toLowerCase().includes(value)
||
emp.status.toLowerCase().includes(value)

)

}

createEmployee(){

this.router.navigate(['/employees/create'])

}

editEmployee(id:string){

this.router.navigate(
['/employees/edit',id]
)

}

deleteEmployee(id:string){

this.employeeService
.deleteEmployee(id)
.subscribe(()=>{

this.loadEmployees()

})

}

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
