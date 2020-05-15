import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TeacherinfoComponent } from './teacherinfo/teacherinfo.component';

const routes: Routes = [
    { path: 'teacherinfo', component: TeacherinfoComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
