import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-sibling-report',
  templateUrl: './sibling-report.component.html',
  styleUrls: ['./sibling-report.component.css']
})
export class SiblingReportComponent implements OnInit {

  constructor(private dt: DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Student Report");
  }

}
