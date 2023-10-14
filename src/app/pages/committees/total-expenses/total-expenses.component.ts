import { CommonModule } from "@angular/common";
import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import { CommitteeExpensesGQL, CommitteeExpensesResponse } from "./committee-expenses-gql.query";
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  standalone: true,
  selector: 'committee-expenses',
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  template: `
    <mat-card>
      <mat-card-subtitle>
        Total Expenses
      </mat-card-subtitle>
      <mat-card-title>
        {{ expenses ? (expenses | currency:'USD':'symbol':'1.0-0') : '-'}}
      </mat-card-title>
    </mat-card>
    <mat-progress-bar 
      *ngIf="showProgressBar"
      mode="indeterminate"
    ></mat-progress-bar>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `],
})
export class CommitteeExpensesComponent implements OnChanges {
  @Input() committeeName;

  expenses: number;
  showProgressBar = false;

  constructor(
    private committeeExpensesGQL: CommitteeExpensesGQL,
  ) {}

  ngOnChanges(changes: SimpleChanges): void  {
    if (changes['committeeName']) {
      const committeeName = changes['committeeName'].currentValue;
      this.update(committeeName);
    }
  }


  update(committeeName: string) {
    this.committeeName = committeeName;

    if (!this.committeeName) { return; }

    this.showProgressBar = true;
    this.committeeExpensesGQL.watch({
      committeeName: this.committeeName,
    }, {
      // errorPolicy: 'all',
    }).valueChanges.subscribe( (result: any) => {
      const response: CommitteeExpensesResponse = result.data;

      const expenses = response?.committee?.expenses?.sum;
      this.expenses = expenses ? expenses : null;

      this.showProgressBar = false;
    });
  }
}
