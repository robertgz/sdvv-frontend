import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommitteeGQLComponent } from "./committee-gql.component";
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommitteeExpensesComponent } from "./total-expenses/total-expenses.component";
import { CommitteeContributionsComponent } from "./total-contributions/total-contributions.component";

@Component({
  standalone: true,
  selector: 'committee',
  imports: [
    MatCardModule,
    MatGridListModule,
    CommitteeExpensesComponent,
    CommitteeContributionsComponent,
  ],
  template: `
    <div class="committee-container">

      <mat-grid-list cols="2" rowHeight="100px">
        <mat-grid-tile [colspan]="2" >
          <mat-card  class="card">
            <mat-card-subtitle>
              Details for Committee:
            </mat-card-subtitle>
            <mat-card-title>
              {{committeeName}}
            </mat-card-title>
          </mat-card>
        </mat-grid-tile>

        <mat-grid-tile [colspan]="1" >
          <committee-contributions class="card total"
            [committeeName]="committeeName"
          ></committee-contributions>
        </mat-grid-tile>

        <mat-grid-tile [colspan]="1" >
          <committee-expenses class="card total"
            [committeeName]="committeeName"
          ></committee-expenses>
        </mat-grid-tile>
      </mat-grid-list>
  </div>
  `,
  styles: [`
    .committee-container {
      padding: 20px;
    }
    /* .total {
    } */
   .card{
      margin: 10px;
      width: 100%;
    }
  `],
})
export class CommitteeComponent implements OnInit {
  @Input() committeeName = 'Default Committee Name in Component';


  constructor(

  ) {}

  ngOnInit(): void {
    console.log( "CommitteeComponent" );
    console.log( this.committeeName );
  }

}
