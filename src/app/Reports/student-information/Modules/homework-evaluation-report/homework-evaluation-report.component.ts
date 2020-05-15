import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';

@Component({
  selector: 'app-homework-evaluation-report',
  templateUrl: './homework-evaluation-report.component.html',
  styleUrls: ['./homework-evaluation-report.component.css']
})
export class HomeworkEvaluationReportComponent implements OnInit {

  constructor(private dt: DatatableService) { }

  ngOnInit(): void {
    
    this.dt.initTable("Student Report");
  }

}
