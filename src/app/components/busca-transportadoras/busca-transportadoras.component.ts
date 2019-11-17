import { Component, OnInit } from '@angular/core';
import { TransportadoraService } from '../../services/transportadora-service';
import { FiltroPesquisa } from '../../models/filtro-pesquisa';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private service: TransportadoraService,
    private toastrService: ToastrService
    ){
      this.filtroModel  = new FiltroPesquisa();
      //Inicialização do objeto
      this.filtroModel.cidade = "";
      this.filtroModel.modal = "";
      this.filtroModel.nome = "";
      this.filtroModel.uf = ""
    }

  //Declaração de variáveis
  qtdResultado: number = 0;
  title = 'frontend-transportadora';
  transportadoras = [];
  numberRowsCards = 1;
  filtroModel: FiltroPesquisa;
  selectable = true;
  removable = true;
  arrayUfs;
  arrayCidades;
  arrayModais;

  tiles: Tile[] = [
    {text: '', cols: 1, rows: 10, color: 'white'},
    {text: '', cols: 3, rows: this.numberRowsCards, color: 'white'},
    {text: '', cols: 4, rows: 1, color: 'white'},
  ];

  ngOnInit() {
    this.buscarTransportadoras();
  }

  buscarTransportadoras(){
    this.service.getTransportadoras().subscribe(response => {
      let arrAuxUf = [];
      let arrAuxCidade = [];
      let arrayAuxModais = [];

      this.transportadoras = response;
      this.tiles[1].rows = response.length + 3;
      this.qtdResultado = response.length;

      this.transportadoras.forEach(function (value) {
        arrAuxUf.push(value.uf);
        arrAuxCidade.push(value.cidade);
        arrayAuxModais.push(value.modal);

    });
      //Exclui os valores repetidos para serem exibidos em tela
      this.arrayUfs = new Set(arrAuxUf); 
      this.arrayCidades = new Set(arrAuxCidade);
      this.arrayModais = new Set(arrayAuxModais);
    });
  }
  pesquisaTransportadoraFiltro(){
    this.service.pesquisaFiltro(this.filtroModel).subscribe(response => {

        if(response.length > 0){

          this.transportadoras = response;
          this.tiles[1].rows = response.length + 3;
          
          //Manipula o label responsável por informar a quantidade de registros em tela.
          this.qtdResultado = this.transportadoras.length;

        } else {
          //Retorna mensagem do tipo Toast para o usuário informando que a pesquisa não encontrou os dados de acordo com que foi inserido.
          this.toastrService.error("Não encontramos a transportadora que você pesquisou", 'Ooops algo deu errado...', {
          timeOut: 5000

        });
        }

    });
  }

  //Métodos responsáveis por limpar os filtros de acordo com a ação do usuário
  removeFiltroNome(nome: string){
    if(nome == this.filtroModel.nome){
      this.filtroModel.nome = null;
    }
  }
  removeFiltroCidade(cidade: string){
    if(cidade == this.filtroModel.cidade){
      this.filtroModel.cidade = null;
    }
  }
  removeFiltroUf(uf: string){
    if(uf == this.filtroModel.uf){
      this.filtroModel.uf = null;
    }
  }
  removeFiltroModal(modal: string){
    if(modal == this.filtroModel.modal){
      this.filtroModel.modal = null;
    }
  }

  addChipUf(uf: string){
    this.filtroModel.uf = uf;
  }
  addChipCidade(cidade: string){
    this.filtroModel.cidade = cidade;
  }
  addChipModal(modal: string){
    this.filtroModel.modal = modal;
  }
}
