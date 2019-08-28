import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentTableComponent } from "./student-table/student-table.component";

const routes: Routes = [
  {
    path: '',
    component: StudentTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentListRoutingModule { }
