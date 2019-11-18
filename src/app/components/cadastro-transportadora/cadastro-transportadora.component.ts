import { Component, OnInit } from '@angular/core';
import {Transportadora} from '../../models/transportadora'
import { TransportadoraService } from '../../services/transportadora-service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-transportadora',
  templateUrl: './cadastro-transportadora.component.html',
  styleUrls: ['./cadastro-transportadora.component.css']
})

export class CadastroTransportadoraComponent implements OnInit {
  
  transportadoraModel: Transportadora;
  mesorregioes;
  arquivoSelecionado: File = null;
  imgURL;

  constructor(
    private service: TransportadoraService,
    private toastrService: ToastrService
    ){
      this.transportadoraModel = new Transportadora;
    }

  ngOnInit() {
    //Busca mesorregioes
    this.buscarMesorregioes();
  }

  onSubmit(formulario: NgForm){

    this.service.cadastrar(this.transportadoraModel).subscribe(response => {
      if(response.success){

        //Retorna mensagem do tipo Toast para o usuário informando que o cadastro foi realizado com sucesso
        this.toastrService.success('Seu cadastro foi realizado com sucesso.', 'Aeehoo!', {
          timeOut: 5000
        });
        //Reseta todo o formulário em caso do cadastro ser realizado com sucesso.
        formulario.resetForm();
        
      }else{

        //Retorna mensagem do tipo Toast para o usuário informando que o cadastro não foi realizado com sucesso
        this.toastrService.error("Contate o suporte para mais informações", 'Ooops algo deu errado...', {
          timeOut: 5000

        });
      }
    });
  }


  buscarMesorregioes(){
    this.service.getMesorregioes().subscribe(response => {
      let arrayUFs = new Array();

      for(let i = 0; i < response.length; i++){
        arrayUFs[i] = response[i].UF.sigla;
      }
      this.mesorregioes = new Set(arrayUFs);
    });
  }

  buscarEndereco(){
    if(this.transportadoraModel.cep.length == 8){
      this.service.getEnderecoViaCEP(this.transportadoraModel.cep).subscribe(response => {
        if(response.erro != true){
          this.transportadoraModel.uf = response.uf;
          this.transportadoraModel.cidade = response.localidade;
          this.transportadoraModel.bairro = response.bairro;
          this.transportadoraModel.rua = response.logradouro;
        }else if(response.erro){
          //Retorna mensagem do tipo Toast para o usuário informando que não foi encontrado o cep digitado
          this.toastrService.info('Não encontramos o endereço com CEP digitado, faça-o manualmente.', 'Ooops!', {
            timeOut: 5000
          });
        }
      });
     
    } else {
        return false;
      }
  }
  upload(event){
      this.arquivoSelecionado = <File>event.target.files[0];
    }
}
