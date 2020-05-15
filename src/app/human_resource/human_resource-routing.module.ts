import { Routes, RouterModule } from '@angular/router';


import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { StaffDirectoryComponent } from './staff-directory/staff-directory.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



export const routes: Routes = [

  {path : 'apply-leave', component: ApplyLeaveComponent},
  {path : 'staff-directory', component: StaffDirectoryComponent},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HumanResourceRoutingModule { }

