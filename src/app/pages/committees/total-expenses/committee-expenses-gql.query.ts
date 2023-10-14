import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

export interface CommitteeExpensesResponse {
  committee: {
    id: string;
    name: string;
    dashedName: string;
    expenses: {
      sum: number;
    }
  };
}

@Injectable({
  providedIn: 'root',
})
export class CommitteeExpensesGQL extends Query<Response> { 
  document = gql`
    query committee ($committeeName: String!) {
      committee(committeeName: $committeeName) {
        id
        name
        dashedName
        expenses {
          sum
        }
      }
    }
  `;
}
