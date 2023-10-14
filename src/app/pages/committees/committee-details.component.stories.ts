
import { Meta, Story } from '@storybook/angular';

import { CommitteeDetailsComponent } from './committee-details.component'

export default {
  title: 'CommitteeDetailsComponent',
  component: CommitteeDetailsComponent,
} as Meta;

export const Name1VeryShort: Story = () => ({
  props: {
    committeeName: 'Short Committee Name',
  },
});

export const Name2Medium: Story = () => ({
  props: {
    committeeName: 'This is a medium Committee Name for the year 2022',
  },
});

export const Name3Long: Story = () => ({
  props: {
    committeeName: 'This component is a longer Committee Name for a candidate running for an office in the year 2022',
  },
});

export const Name4Longer: Story = () => ({
  props: {
    committeeName: 'This name used for this Committee is a longer and more descriptive with lots of primary and secondary details about the committee and may or may not be for a candidate running for an office in the current year',
  },
});
