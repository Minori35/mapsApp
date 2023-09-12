import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPagesComponent } from './pages/full-screen-pages/full-screen-pages.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MarketsPagesComponent } from './pages/markets-pages/markets-pages.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

const routes: Routes = [
  {
    path :'',
    component: MapsLayoutComponent,
    children :[
      {path: 'fullscreen', component : FullScreenPagesComponent},
      {path: 'zoom-range', component : ZoomRangePageComponent},
      {path: 'markers', component : MarketsPagesComponent},
      {path: 'properties', component : PropertiesPageComponent},
      {path: '**', redirectTo:'fullscreen'},



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
