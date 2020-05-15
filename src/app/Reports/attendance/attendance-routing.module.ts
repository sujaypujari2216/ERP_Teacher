import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AttendanceLinksComponent } from './attendance-links/attendance-links.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { StudentAttendanceTypeReportComponent } from './student-attendance-type-report/student-attendance-type-report.component';



const routes: Routes = [
  { path: 'attendance', component: AttendanceLinksComponent },
  { path: 'attendance-report', component: AttendanceReportComponent },
  { path:'student-attendance-type-report', component: StudentAttendanceTypeReportComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
