import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ContributionsByCodeStackedBarComponent } from 'lib-ui-charts';

import { GraphQLModule } from '../graphql.module';
import { ContributionsByCodeGQL, ContributionsByCode } from './contributions-by-code-gql.query';

@Component({
  standalone: true,
  selector: 'gql-contributions-by-code',
  imports: [
    GraphQLModule,
    ContributionsByCodeStackedBarComponent,
  ],
  providers: [ ContributionsByCodeGQL ], 
  template: `
    <contributions-by-code-stacked-bar
      [monetaryContributionsByCode]="monetaryContributions"
      [nonMonetaryContributionsByCode]="nonMonetaryContributions"
    ></contributions-by-code-stacked-bar>
  `,
})
export class ContributionsByCodeGQLComponent implements OnInit {
  @Input() committeeName: string;

  monetaryContributions = {};
  nonMonetaryContributions = {};

  constructor(private contributionsByCodeGQL: ContributionsByCodeGQL) {}

  ngOnInit() {

    this.contributionsByCodeGQL.watch({
      committeeName: this.committeeName,
    }, {
      // errorPolicy: 'all',
    }).valueChanges.subscribe( (result: any) => {
      console.log(result)
      const contributionsByCode: ContributionsByCode = result.data;

      if (contributionsByCode.committee) {
        const monetary = contributionsByCode.committee.contributions.categorizedBy.method.monetary;

        this.monetaryContributions = { ...monetary };
        delete this.monetaryContributions['__typename'];


        const nonMonetary = contributionsByCode.committee.
        contributions.categorizedBy.method.nonMonetary;

        this.nonMonetaryContributions = { ...nonMonetary };
        delete this.nonMonetaryContributions['__typename'];
      }
    });
  }
}
