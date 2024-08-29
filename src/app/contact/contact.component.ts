import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  map!: google.maps.Map;

  ngAfterViewInit(): void {
    // const mapOptions: google.maps.MapOptions = {
    //   center: new google.maps.LatLng(40.73061, -73.935242),
    //   zoom: 12,
    // };

    // this.map = new google.maps.Map(
    //   this.mapContainer.nativeElement,
    //   mapOptions
    // );
  }
}
