import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { } from "google.maps";

@Component({
  selector: 'app-find-place',
  templateUrl: './find-place.component.html',
  styleUrls: ['./find-place.component.css']
})
export class FindPlaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMap()
  }

  initMap = () => {
    new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    })
  }

  enviarLocalizacao = (f: NgForm) => {
    alert(f.value.latitude)
  }

}
