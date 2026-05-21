export interface Account {

    id:string;
    
    employeeId:string;
    
    accountNumber:string;
    
    accountType:'CHECKING'|'SAVINGS';
    
    currency:'INR'|'USD';
    
    balance:number;
    
    status:'OPEN'|'CLOSED';
    
    createdAt?:string;
    updatedAt?:string;
    
    }