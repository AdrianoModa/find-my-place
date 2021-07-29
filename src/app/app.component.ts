import { Component, OnInit } from '@angular/core';
import { } from "google.maps";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  map: google.maps.Map
  
  ngOnInit(): void {
    this.initMap()
  }


initMap(): void {
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

}
