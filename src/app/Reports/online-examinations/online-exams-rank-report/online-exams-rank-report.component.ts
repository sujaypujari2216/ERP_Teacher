import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-online-exams-rank-report',
  templateUrl: './online-exams-rank-report.component.html',
  styleUrls: ['./online-exams-rank-report.component.css']
})
export class OnlineExamsRankReportComponent implements OnInit {

  constructor(private dt:DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Online Exams Rank Report");
  }

}
