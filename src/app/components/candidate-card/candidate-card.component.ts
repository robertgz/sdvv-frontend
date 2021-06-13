import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { CandidateCard } from '../../interfaces/candidateCard';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss']
})

export class CandidateCardComponent implements OnChanges {
  @Input() candidateCard: CandidateCard;
  @Output() private emitCandidateId = new EventEmitter<any>();

  candidateImg: string;
  firstName: string;
  lastName: string;
  fullName: string;
  description: string;
  raised: number;
  donors: number;

  ngOnChanges(changes: SimpleChanges) {

    if (changes['candidateCard']) {
      let candidateCard = changes['candidateCard'].currentValue;

      this.candidateImg = candidateCard.candidateImgURL;
      this.firstName = candidateCard.name.split(' ')[0];
      this.lastName = candidateCard.name.slice(this.firstName.length+1);
      this.fullName = candidateCard.name;
      this.description = candidateCard.description;
      this.raised = candidateCard.raised;
      this.donors = candidateCard.donors;
    }
  }

  selectCandidate() {
    this.emitCandidateId.emit(this.candidateCard.id);
  }
}
