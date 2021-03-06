import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { VvChartsModule } from '../vv-charts/vv-charts.module';
import { CandidateModule } from '../candidate/candidate.module';

import { ExpandedChartTitleComponent } from './expanded-chart-title/expanded-chart-title.component';
import { ExpandedOutsideMoneyComponent } from './expanded-outside-money/expanded-outside-money.component';
import { ContributionsByGroupComponent } from './contributions-by-group/contributions-by-group.component';
import { ExpandedAverageDonationComponent } from './expanded-average-donation/expanded-average-donation.component';
import { ExpandedRaisedVsSpentComponent } from './expanded-raised-vs-spent/expanded-raised-vs-spent.component';
import { ExpandedRaisedInVsOutComponent } from './expanded-raised-in-vs-out/expanded-raised-in-vs-out.component';
import { ExpandedQuickViewComponent } from './expanded-quick-view/expanded-quick-view.component';

@NgModule({
  declarations: [
    ExpandedChartTitleComponent,
    ExpandedOutsideMoneyComponent,
    ContributionsByGroupComponent,
    ExpandedAverageDonationComponent,
    ExpandedRaisedVsSpentComponent,
    ExpandedRaisedInVsOutComponent,
    ExpandedQuickViewComponent,
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    FontAwesomeModule,
    VvChartsModule,
    CandidateModule,
  ],
  exports: [
    ExpandedOutsideMoneyComponent,
    ContributionsByGroupComponent,
    ExpandedRaisedVsSpentComponent,
    ExpandedRaisedInVsOutComponent,
    ExpandedQuickViewComponent,
  ],
})
export class CandidateQuickViewModule { }
