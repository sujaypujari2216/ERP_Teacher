import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { StudentAttendanceTypeReportComponent } from './student-attendance-type-report/student-attendance-type-report.component';


@NgModule({
  declarations: [AttendanceReportComponent, StudentAttendanceTypeReportComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
