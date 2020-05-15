import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-online-exam-wise-report',
  templateUrl: './online-exam-wise-report.component.html',
  styleUrls: ['./online-exam-wise-report.component.css']
})
export class OnlineExamWiseReportComponent implements OnInit {

  constructor(private dt:DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Online Exam Wise Report");
  }

}
