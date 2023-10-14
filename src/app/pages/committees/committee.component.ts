import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommitteeGQLComponent } from "./committee-gql.component";
import {MatCardModule} from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'committee',
  imports: [
    MatCardModule,
  ],
  template: `
    <mat-card>
      <mat-card-title>
        {{committeeName}}
      </mat-card-title>
    </mat-card>
  `,
})
export class CommitteeComponent implements OnInit {
  @Input() committeeName = 'Default Committee Name in Component';


  constructor(

  ) {}

  ngOnInit(): void {
    console.log( this.committeeName );
  }

}
