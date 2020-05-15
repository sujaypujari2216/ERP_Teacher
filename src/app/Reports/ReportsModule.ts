import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { StudentInformationModule } from './student-information/student-information.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ExaminationsModule } from './examinations/examinations.module';
import { OnlineExaminationsModule } from './online-examinations/online-examinations.module';
import { TransportModule } from './transport/transport.module';
import { HostelModule } from './hostel/hostel.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    StudentInformationModule,
    AttendanceModule,
    ExaminationsModule,
    OnlineExaminationsModule,
    TransportModule,
    HostelModule,
  ],
  exports: [],
})
export class ReportsModule {
}
