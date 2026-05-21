import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
  })
  export class EmployeeService{
  
  api="http://localhost:3000/employees"
  
  constructor(
  private http:HttpClient
  ){}
  
  getEmployees(){
  
  return this.http.get<Employee[]>(this.api)
  
  }
  
  getEmployee(id:string){
  
  return this.http.get<Employee>(
  `${this.api}/${id}`
  )
  
  }
  
  createEmployee(employee:Employee){
  
  return this.http.post(
  this.api,
  employee
  )
  
  }
  
  updateEmployee(
  id:string,
  employee:Employee
  ){
  
  return this.http.put(
  `${this.api}/${id}`,
  employee
  )
  
  }
  
  deleteEmployee(id:string){
  
  return this.http.delete(
  `${this.api}/${id}`
  )
  
  }
  
  }
