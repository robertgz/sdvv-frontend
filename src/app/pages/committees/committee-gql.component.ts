import { HttpClientModule } from "@angular/common/http";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { GraphQLModule } from "src/app/graphql/graphql.module";
import { CommitteeGQL, CommitteeResponse } from "./committee-gql.query";
import { CommitteeComponent } from "./committee.component";


@Component({
  standalone: true,
  selector: 'committee-gql',
  imports: [
    HttpClientModule,
    GraphQLModule,
    CommitteeComponent,
  ],
  template: `
    <committee
      [committeeName]="name"
    ></committee>
  `,
})
export class CommitteeGQLComponent  implements OnChanges {
  @Input() committeeName = 'Default Committee Name in GQL';
  public name = '';

  constructor(
    private committeeGQL: CommitteeGQL,
  ) {}

  ngOnChanges(changes: SimpleChanges): void  {
    if (changes['committeeName']) {
      const committeeName = changes['committeeName'].currentValue;
      this.update(committeeName);
    }
  }

  
  update(committeeName: string) {
    this.name = committeeName;
    // console.log({ committeeName});

    if (!this.name) { return; }

    this.committeeGQL.watch({
      name: this.name,
    }, {
      // errorPolicy: 'all',
    }).valueChanges.subscribe( (result: any) => {
      const response: CommitteeResponse = result.data;
      const committeeName = response.committee.name;

    // console.log({ result });
    // console.log({ response });

    });
  }
}
