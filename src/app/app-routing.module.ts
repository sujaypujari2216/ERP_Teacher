import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { StudentRoutingModule} from './students_Info/student-routing.module';
import { DownloadRoutingModule } from './Download-Center/downloadcenter-routing.module';
import { CommunicateRoutingModule } from './Communicate/communicate-routing.module';
import { HomeworkRoutingModule } from './Homework/homework-routing.module';
import { ReportsRoutingModule } from './Reports/reports-routing.module';
import { HumanResourceRoutingModule } from './human_resource/human_resource-routing.module';
import { AcademicsModule } from './academics/academics.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { ExaminationRoutingModule } from './Examination/Examination-routing.module';

import { OnlineExamRoutingModule } from './online-exam/online-exam-routing.module';





const routes: Routes = [];

@NgModule({
  // tslint:disable-next-line: max-line-length
  imports: [RouterModule.forRoot(routes, {useHash: true}), StudentRoutingModule, CommunicateRoutingModule,
    // tslint:disable-next-line: max-line-length
    DownloadRoutingModule, HomeworkRoutingModule,/* FormsRoutingModule,*/
    ExaminationRoutingModule,AcademicsModule,
    ReportsRoutingModule, HumanResourceRoutingModule,OnlineExamRoutingModule,DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
