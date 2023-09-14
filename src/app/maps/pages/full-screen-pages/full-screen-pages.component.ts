import { Component ,AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Map} from "mapbox-gl";


@Component({
  templateUrl: './full-screen-pages.component.html',
  styleUrls: ['./full-screen-pages.component.css']
})
export class FullScreenPagesComponent implements AfterViewInit {

  @ViewChild('map') divMap? : ElementRef;
  

  ngAfterViewInit(): void {
    if(!this.divMap) return;    
    const map = new Map({
      container: this.divMap?.nativeElement , // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
  }

