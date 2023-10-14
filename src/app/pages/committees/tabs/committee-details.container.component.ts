import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'committee-details-container',
  // imports: [],
  template: `
    
  `,
})
export class CommitteeDetailsContainerComponent {
  @Input() committeeNameID: string;

}