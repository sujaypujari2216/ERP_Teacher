import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-rank-report',
  templateUrl: './rank-report.component.html',
  styleUrls: ['./rank-report.component.css']
})
export class RankReportComponent implements OnInit {

  constructor(private dt:DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Rank Report");
  }

}
