import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-admission-report',
  templateUrl: './admission-report.component.html',
  styleUrls: ['./admission-report.component.css']
})
export class AdmissionReportComponent implements OnInit {

  constructor(private dt: DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Student Report");
  }

}
