import { TreeError } from '@angular/compiler';
import { Component, AfterViewInit, ViewChild , ElementRef} from '@angular/core';
import {Map} from "mapbox-gl";
import { throwError } from 'rxjs';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit{

  @ViewChild('map') divMap? : ElementRef;

  public zoom : number = 10;

  public map? :Map;



  ngAfterViewInit(): void {
    if(!this.divMap) return;    
     this.map = new Map({
      container: this.divMap?.nativeElement , // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListener();
  }


  mapListener(){

    if( !this.map) throw 'Mapa no inizalizado '

    this.map.on('zoom', (ev) =>{
      this.zoom = this.map!.getZoom();
      
    }) ;

    this.map.on('zoomend', (ev) =>{
      if(this.map!.getZoom()<18 ) return;
      this.map!.zoomTo(18);
      
    }) ;
  }

  
  zoomChanges(value : string){
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom)
  }

  zoomin(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

}
