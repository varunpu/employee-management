import { Injectable } from '@angular/core';

import {
HttpClient
} from '@angular/common/http';

import {
Observable
} from 'rxjs';

import {
Account
} from './../../core/models/account.model';

@Injectable({
providedIn:'root'
})

export class AccountService{

private api=
'http://localhost:3000/accounts';

constructor(
private http:HttpClient
){}

getAccountsByEmployee(
employeeId:string
):Observable<Account[]>{

return this.http.get<Account[]>(
`${this.api}?employeeId=${employeeId}`
)

}

createAccount(
account:Account
){

return this.http.post(
this.api,
account
)

}

updateAccount(
id:string,
account:Account
){

return this.http.put(
`${this.api}/${id}`,
account
)

}

deleteAccount(
id:string
){

return this.http.delete(
`${this.api}/${id}`
)

}

}
