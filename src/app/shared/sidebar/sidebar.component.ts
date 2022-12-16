import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial() {
    return this.giftService.historial;
  }

  constructor(private giftService: GifsService) { }

  clearLocal() {
    localStorage.clear();
    console.log("Clear local storage");
  }

  buscar( termino: string ) {
    this.giftService.buscarGifs(termino);
  }


}
