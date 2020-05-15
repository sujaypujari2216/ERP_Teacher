import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-student-attendance-type-report',
  templateUrl: './student-attendance-type-report.component.html',
  styleUrls: ['./student-attendance-type-report.component.css']
})
export class StudentAttendanceTypeReportComponent implements OnInit {

  constructor(private dt: DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Attendance Type Report");
  }

}
