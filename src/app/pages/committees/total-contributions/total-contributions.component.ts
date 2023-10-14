import { CommonModule } from "@angular/common";
import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import { CommitteeContributionsGQL, CommitteeContributionsResponse } from "./committee-contributions-gql.query";
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  standalone: true,
  selector: 'committee-contributions',
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  template: `
    <mat-card>
      <mat-card-subtitle>
        Total Contributions
      </mat-card-subtitle>
      <mat-card-title>
        {{ contributions ? (contributions | currency:'USD':'symbol':'1.0-0') : '-'}}
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
export class CommitteeContributionsComponent implements OnChanges {
  @Input() committeeName;

  contributions: number;
  showProgressBar = false;

  constructor(
    private committeeContributionsGQL: CommitteeContributionsGQL,
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
    this.committeeContributionsGQL.watch({
      committeeName: this.committeeName,
    }, {
      // errorPolicy: 'all',
    }).valueChanges.subscribe( (result: any) => {
      const response: CommitteeContributionsResponse = result.data;

      const contributions = response?.committee?.contributions?.sum;
      this.contributions = contributions ? contributions : null;

      this.showProgressBar = false;
    });
  }
}
