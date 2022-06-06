import { Component } from '@angular/core'
import { Country } from '../../interfaces/pais-interfaces'
import { PaisService } from '../../services/pais.service'

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin: 5px 5px 0px 0px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ]
  regionActiva: string = ''
  paises: Country[] = []

  constructor(private paisService: PaisService) {}

  getCSSClass(region: string) {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  }

  activarRegion(region: string) {

    if(region === this.regionActiva){ return }
    this.regionActiva = region
    this.paises = []

    this.paisService
      .buscarRegion(region)
      .subscribe((data) => (this.paises = data))
  }
}
