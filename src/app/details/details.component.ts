import { Component } from '@angular/core';
import { TecnologiaService } from '../services/tecnologia.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent  {

  
  constructor(private tecnologiaService: TecnologiaService) { }

  get getItem (){
    return this.tecnologiaService.itemSelected
  }


  resetItem (){
    this.tecnologiaService.resetItem();
  }
}
