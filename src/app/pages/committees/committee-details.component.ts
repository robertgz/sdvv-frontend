import { Component, Input } from "@angular/core";

enum CommitteeType {
  C = "Cand/Officeholder Controlled",
  P = "Cand/Officeholder Primarily Formed",
  B = "Ballot Measure",
  G = "General Purpose",
}

@Component({
  standalone: true,
  selector: 'committee-details',
  // imports: [],
  template: `
    <h1>{{committeeName}}</h1>
  `,
})
export class CommitteeDetailsComponent {
  @Input() committeeName = 'Default Committee Name';
  @Input() committeeType: CommitteeType;

  // component logic
}

/**
 * committee name
 * committee type: primary candidate, independent expenditure
 * committee ?level?: city, county, state
 * total raised
 * total spent
 * years active
 * 
 */
