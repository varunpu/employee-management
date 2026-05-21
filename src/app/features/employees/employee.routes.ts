import { Routes } from '@angular/router';

import { EmployeeListComponent }
from './pages/employee-list/employee-list.component';

import { EmployeeDetailComponent }
from './pages/employee-detail/employee-detail.component';

export const employeeRoutes:Routes=[

{
path:'',
component:EmployeeListComponent
},

{
path:'create',
component:EmployeeDetailComponent
},

{
path:'edit/:id',
component:EmployeeDetailComponent
}

]