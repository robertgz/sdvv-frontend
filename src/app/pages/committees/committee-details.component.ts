import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

enum CommitteeType {
  C = "Cand/Officeholder Controlled",
  P = "Cand/Officeholder Primarily Formed",
  B = "Ballot Measure",
  G = "General Purpose",
}

@Component({
  standalone: true,
  selector: 'committee-details',
  imports: [
    CommonModule,
  ],
  template: `
    <h1>{{name}}</h1>
  `,
})
export class CommitteeDetailsComponent {
  @Input() committeeName = 'Default Committee Name';
  @Input() committeeType: CommitteeType;

  public name = '';

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log({ name: this.name });
    });
  }

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
