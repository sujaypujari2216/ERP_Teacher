import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-online-exams-report',
  templateUrl: './online-exams-report.component.html',
  styleUrls: ['./online-exams-report.component.css']
})
export class OnlineExamsReportComponent implements OnInit {

  constructor(private dt:DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Online Exams Report");
  }

}
