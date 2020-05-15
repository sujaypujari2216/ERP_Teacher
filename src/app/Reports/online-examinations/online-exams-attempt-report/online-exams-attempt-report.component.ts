import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-online-exams-attempt-report',
  templateUrl: './online-exams-attempt-report.component.html',
  styleUrls: ['./online-exams-attempt-report.component.css']
})
export class OnlineExamsAttemptReportComponent implements OnInit {

  constructor(private dt:DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Online Exams Attempt");

  }

}
