import { Mapa } from './../../shared/model/mapa';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { } from "google.maps";

@Component({
  selector: 'app-find-place',
  templateUrl: './find-place.component.html',
  styleUrls: ['./find-place.component.css']
})
export class FindPlaceComponent implements OnInit {

  mapas: Mapa[] = []
  loading: boolean = false

  constructor() { }

  ngOnInit() {
    this.initMap()
  }

  initMap = () => {
    const lat_long = { lat: -3.75, lng: -38.555 }
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: lat_long,
      zoom: 10
    })
    new google.maps.Marker({
      position: lat_long,
      map,
      title: 'Fortaleza - Ceará'
    })
  }

  enviar_localizacao = (f: NgForm) => {
    this.loading = true
    
    if (f.invalid) {
      return
    }

    const timeout = 2000
    setTimeout(() => {
      this.buscar_local(f.value.latitude, f.value.longitude, f.value.texto, f.value.zoom)
      this.loading = false
      f.resetForm({})
    }, timeout);
  }

  buscar_local = (latitude: number, longitude: number, conteudo_texto: string, zoom?: number) => {
    const mapaHtml = document.getElementById('map') as HTMLElement
    const lat_long = { lat: latitude, lng: longitude }
    const map = new google.maps.Map(mapaHtml, {
      center: lat_long,
      zoom: zoom ? zoom : 10
    })

    const marcador = new google.maps.Marker({
      position: lat_long,
      map
    })

    const texto_mapa = new google.maps.InfoWindow({
      content: conteudo_texto
    })

    marcador.addListener('click', () => {
      texto_mapa.open({
        anchor: marcador,
        map,
        shouldFocus: false
      })
    })
  }

}
