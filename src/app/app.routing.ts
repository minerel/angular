import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';

const routes:Routes=[
  {path:'',pathMatch:'full',redirectTo:'employees-list'},
  {path:'create-employee',component:EmployeesCreateComponent},
  {path:'employees-list',component:EmployeesListComponent},
  {path:'employee-edit/:id',component:EmployeesEditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
