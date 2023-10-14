// import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { ContributionsByCodeGQLComponent } from './contributions-by-code-gql.component';
import { NgxEchartsModule } from 'ngx-echarts';

export default {
  title: 'Lib-gql/Contributions by code',
  component: ContributionsByCodeGQLComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        NgxEchartsModule.forRoot({
          echarts: () => import('echarts'),
        }),
      ],
      providers: [],
    }),
  ], 
};

export const Default = () => ({
  props: {
    committeeName: ''
  },
})

export const NewSanDiego = () => ({
  props: {
    committeeName: 'New San Diego'
  },
})

export const Sample2 = () => ({
  props: {
    committeeName: 'Neighbors for Housing Solutions Supporting Todd Gloria for San Diego Mayor 2020'
  },
})

export const Sample3 = () => ({
  props: {
    committeeName: 'SUCCESS SAN DIEGO IN SUPPORT OF BARBARA BRY FOR MAYOR 2020'
  },
})

export const Sample4 = () => ({
  props: {
    committeeName: 'San Diego Regional Chamber of Commerce Political Action Committee'
  },
})

export const Sample5 = () => ({
  props: {
    committeeName: 'Downtown San Diego Partnership PAC'
  },
})
