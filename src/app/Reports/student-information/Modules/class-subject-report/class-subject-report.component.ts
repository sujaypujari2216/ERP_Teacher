import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-class-subject-report',
  templateUrl: './class-subject-report.component.html',
  styleUrls: ['./class-subject-report.component.css']
})
export class ClassSubjectReportComponent implements OnInit {

  constructor(private dt: DatatableService) { }

  ngOnInit(): void {
    this.dt.initTable("Student Report");
  }

}
