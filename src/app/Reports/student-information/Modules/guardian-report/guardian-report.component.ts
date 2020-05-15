import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-guardian-report',
  templateUrl: './guardian-report.component.html',
  styleUrls: ['./guardian-report.component.css']
})
export class GuardianReportComponent implements OnInit {

  constructor(private dt: DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Student Report");
  }
}
