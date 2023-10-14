
import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapComponent } from './cfd-map.component';

// import { MapComponent } from './map.component';

export default {
  title: 'MapComponent',
  component: MapComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        BrowserAnimationsModule,
        NgxMapboxGLModule.withConfig({
          accessToken: 'pk.eyJ1Ijoicm9iZXJ0Z3oiLCJhIjoiY2t2cTNscG5vMXVyNTJwdXBlNnFtbTlqYSJ9.mKxW2etLLUmXBEnBPax0Dw',
        }),
      ],
      providers: [],
    }),
  ], 
} as Meta;

export const Map1: Story = () => ({
  props: {
  },
});