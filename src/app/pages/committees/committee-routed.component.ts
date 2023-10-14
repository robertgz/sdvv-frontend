import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommitteeGQLComponent } from "./committee-gql.component";

@Component({
  standalone: true,
  selector: 'committee-routed',
  imports: [
    RouterModule,
    CommitteeGQLComponent,
  ],
  template: `
    <committee-gql
      [committeeName]="name"
    ></committee-gql>
  `,
})
export class CommitteeRoutedComponent implements OnInit {
  public name = 'Default Committee Name in Routed';
  private routeParamName = 'name';

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params[this.routeParamName];
    });
  }

}
