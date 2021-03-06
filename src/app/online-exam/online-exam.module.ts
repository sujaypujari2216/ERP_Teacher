import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineExamRoutingModule } from './online-exam-routing.module';
import { OnlineExaminationComponent } from './online-examination/online-examination.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';




@NgModule({
  declarations: [OnlineExaminationComponent, QuestionBankComponent],
  imports: [
    CommonModule,
    OnlineExamRoutingModule
  ]
})
export class OnlineExamModule { }
