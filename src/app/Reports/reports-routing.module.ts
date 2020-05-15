import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentInformationRoutingModule } from './student-information/student-information-routing.module';
import { AttendanceRoutingModule } from './attendance/attendance-routing.module';
import { ExaminationsRoutingModule } from './examinations/examinations-routing.module';
import { OnlineExaminationsRoutingModule } from './online-examinations/online-examinations-routing.module';
import { TransportRoutingModule } from './transport/transport-routing.module';
import { HostelRoutingModule } from './hostel/hostel-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes),
    StudentInformationRoutingModule,
    AttendanceRoutingModule,
    ExaminationsRoutingModule,
    OnlineExaminationsRoutingModule,
    TransportRoutingModule,
    HostelRoutingModule,
  ],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
