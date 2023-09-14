import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from "mapbox-gl";


import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPagesComponent } from './pages/full-screen-pages/full-screen-pages.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MarketsPagesComponent } from './pages/markets-pages/markets-pages.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPagesComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
    MarketsPagesComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
