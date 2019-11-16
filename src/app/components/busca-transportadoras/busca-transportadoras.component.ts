import { Component, OnInit } from '@angular/core';
import { TransportadoraService } from '../../services/transportadora-service';
import { Transportadora } from '../../models/transportadora';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-busca-transportadoras',
  templateUrl: './busca-transportadoras.component.html',
  styleUrls: ['./busca-transportadoras.component.css']
})
export class BuscaTransportadorasComponent implements OnInit {

  constructor(private service: TransportadoraService){}

  title = 'frontend-transportadora';

  transportadoras: Array<Transportadora>;
  numberRowsCards = 1;

  tiles: Tile[] = [
    {text: '', cols: 1, rows: 4, color: 'white'},
    {text: '', cols: 3, rows: this.numberRowsCards, color: 'white'},
    {text: '', cols: 4, rows: 1, color: 'white'},
  ];

  ngOnInit() {
    this.buscarTransportadoras();
  }

  buscarTransportadoras(){
    this.service.getTransportadoras().subscribe(response => {
      this.transportadoras = response;
      this.tiles[1].rows = response.length + 2;
    });
  }

}
