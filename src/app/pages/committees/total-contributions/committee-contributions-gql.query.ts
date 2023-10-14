import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

export interface CommitteeContributionsResponse {
  committee: {
    id: string;
    name: string;
    dashedName: string;
    contributions: {
      sum: number;
    }
  };
}

@Injectable({
  providedIn: 'root',
})
export class CommitteeContributionsGQL extends Query<Response> { 
  document = gql`
    query committee ($committeeName: String!) {
      committee(committeeName: $committeeName) {
        id
        name
        dashedName
        contributions {
          sum
        }
      }
    }
  `;
}
