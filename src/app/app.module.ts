import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { TeacherinfoComponent } from './dashboard/teacherinfo/teacherinfo.component';
import { AddParentsComponent } from './parents_Info/add-parents/add-parents.component';
import { ParentsdetailsComponent } from './parents_Info/parentsdetails/parentsdetails.component';

import { AddHomeworkComponent } from './Homework/add-homework/add-homework.component';
import { SearchHomeworkComponent } from './Homework/search-homework/search-homework.component';
import { AdmitFormComponent } from './admit-form/admit-form.component';
import { ReportsModule } from "./Reports/ReportsModule";
import { ApplyLeaveComponent } from './human_resource/apply-leave/apply-leave.component';
import { StaffDirectoryComponent } from './human_resource/staff-directory/staff-directory.component';
import { AcademicsModule } from './academics/academics.module';
import { DatatableService } from './shared/datatableservice/datatable.service';
import { AddMoreStudComponent } from './parents_Info/add-more/add-more.component';






@NgModule({
  declarations: [
    AppComponent,
      TeacherinfoComponent,
      AddParentsComponent,
    ParentsdetailsComponent,
    AddHomeworkComponent,
    SearchHomeworkComponent,
    AdmitFormComponent,
    ApplyLeaveComponent,
    StaffDirectoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReportsModule,
    AcademicsModule,
    RouterModule,
    RouterModule.forRoot(
      [
        {path:'',redirectTo:'teacherinfo',pathMatch:'full'},
        {path:'parentsdetails',component:ParentsdetailsComponent},
        {path:'addparents',component:AddParentsComponent},
        {path:'add-more-stud',component:AddMoreStudComponent}
      ],{useHash:true}
      
    )
  ],
  providers: [DatatableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
