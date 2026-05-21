import {
  Component,
  Input,
  OnInit
  }
  from '@angular/core';
  
  import {
  CommonModule
  } from '@angular/common';
import { AccountService } from '../../../../core/services/account.service';
  
  
  @Component({
  
  selector:'app-account-list',
  
  standalone:true,
  
  imports:[
  CommonModule
  ],
  
  templateUrl:
  './account-list.component.html'
  
  })
  
  export class AccountListComponent
  implements OnInit{
  
  @Input()
  employeeId!:string;
  
  accounts:any[]=[];
  
  subtotal=0;
  
  constructor(
  private accountService:
  AccountService
  ){}
  
  ngOnInit(){
  
  this.loadAccounts();
  
  }
  
  loadAccounts(){
  
  this.accountService
  .getAccountsByEmployee(
  this.employeeId
  )
  .subscribe(res=>{
  
  this.accounts=res;
  
  this.calculateTotal();
  
  })
  
  }
  
  calculateTotal(){
  
  this.subtotal=
  
  this.accounts.reduce(
  
  (sum,account)=>
  
  sum+account.balance,
  
  0
  
  )
  
  }
  
  removeAccount(
  id:string
  ){
  
  this.accountService
  .deleteAccount(id)
  .subscribe(()=>{
  
  this.loadAccounts()
  
  })
  
  }
  
  }