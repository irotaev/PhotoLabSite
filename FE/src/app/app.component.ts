import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit():void {
      jQuery("#photo-gallery").unitegallery({
        tiles_space_between_cols: 10,

        tile_enable_border: true,
        tile_border_width:8,
        tile_border_color: "#0D7899"
      });
  }
}
