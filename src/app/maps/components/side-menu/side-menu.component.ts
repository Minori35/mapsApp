import { Component } from '@angular/core';

interface MenuItem{
  router : string;
  name   : string;
}
@Component({
  selector: 'map-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[]=[
    {router: '/maps/fullscreen', name :'FullScreen'},
    {router: '/maps/zoom-range', name :'Zoom Range'},
    {router: '/maps/markers', name :'FullScreen'},
    {router: '/maps/properties', name :'Properties'},

  ]
}
