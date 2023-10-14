import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';

export interface CommitteeResponse {
  committee: {
    id: string;
    name: string;
    dashedName: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CommitteeGQL extends Query<Response> { 
  document = gql`
    query committee ($name: String!) {
      committee(committeeName: $name) {
        id
        name
        dashedName
      }
    }
  `;
}
