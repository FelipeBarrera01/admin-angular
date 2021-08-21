import { Component } from '@angular/core';
import { Body } from '../interfaces/denario.interface';
import { TecnologiaService } from '../services/tecnologia.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  get resultados() {



    
    return this.tecnologiaService.response;
  }

  constructor(private tecnologiaService: TecnologiaService) {}

  selectItem(item: Body): void {
    this.tecnologiaService.selectItem(item);
  }
}
