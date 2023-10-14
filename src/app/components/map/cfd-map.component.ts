import { Component, Input } from "@angular/core";
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@Component({
  standalone: true,
  selector: 'cfd-map',
  imports: [
    NgxMapboxGLModule,
  ],
  template: `
    <mgl-map
      [style]="'mapbox://styles/mapbox/streets-v9'"
      [zoom]="[9]"
      [center]="[-74.5, 40]"
    >
    </mgl-map>
  `,
  styles: [
    `
    @import '~mapbox-gl/dist/mapbox-gl.css';
      mgl-map {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class MapComponent {
  // @Input() committeeName = 'Default Committee Name';
  // @Input() committeeType: CommitteeType;

  // component logic
}
