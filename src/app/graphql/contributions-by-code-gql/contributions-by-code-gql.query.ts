import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

interface AmountsByCode {
  ind: number;
  com: number;
  oth: number;
  pty: number;
  scc: number;
}

export interface ContributionsByCode {
  committee: {
    contributions: {
      categorizedBy: {
        method: {
          monetary?: AmountsByCode
          nonMonetary?: AmountsByCode
        }
      }
    };
  };
}

export const CONTRIBUTIONS_BY_CODE_FRAGMENT = gql`
  fragment CodeFields on ContributionsSumByCode {
    ind
    com
    oth
    pty
    scc
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ContributionsByCodeGQL extends Query<Response> { 
  document = gql`
    query Committee($committeeName: String!) {
      committee(committeeName: $committeeName) {
        name
        contributions {
          sum
          categorizedBy {
            method {
              monetary {
                ...CodeFields
              }
              nonMonetary {
                ...CodeFields
              }
            }
          }
        }
      }
    }
    ${CONTRIBUTIONS_BY_CODE_FRAGMENT}
  `;
}
