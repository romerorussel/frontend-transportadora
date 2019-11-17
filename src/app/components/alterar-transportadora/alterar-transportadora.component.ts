import { Component, OnInit } from '@angular/core';
import {Transportadora} from '../../models/transportadora'
import { TransportadoraService } from '../../services/transportadora-service';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-alterar-transportadora',
  templateUrl: './alterar-transportadora.component.html',
  styleUrls: ['./alterar-transportadora.component.css']
})
export class AlterarTransportadoraComponent implements OnInit {

  transportadoraModel: Transportadora;
  mesorregioes;
  idTransportadora: number;
  constructor(
              private service: TransportadoraService,
              private toastrService: ToastrService,
              private route: ActivatedRoute,
              private router: Router,
  ) {
    this.transportadoraModel = new Transportadora;
    this.idTransportadora = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.buscarTransportadora(this.idTransportadora);
    this.buscarMesorregioes();
  }
  onSubmit(){}

  
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
  buscarTransportadora(id: number){
    this.service.getTransportadoraPorId(id).subscribe(response => {
      this.transportadoraModel = response;
      console.log(this.transportadoraModel);
    })
  }

  atualizar(){
    this.service.atualizar(this.idTransportadora, this.transportadoraModel).subscribe( response => {
      if(response.success){

        //Retorna mensagem do tipo Toast para o usuário informando que o cadastro foi atualizado com sucesso
        this.toastrService.success('Seu cadastro foi atualizado com sucesso.', 'Aeehoo!', {
          timeOut: 5000
        });
      }else{

        //Retorna mensagem do tipo Toast para o usuário informando que o cadastro não foi atualizado
        this.toastrService.error("Contate o suporte para mais informações", 'Ooops algo deu errado...', {
          timeOut: 5000

        });
      }
    });



  }
  deletar(){
    this.service.deletar(this.idTransportadora).subscribe( response => {
      if(response.success){

        //Retorna mensagem do tipo Toast para o usuário informando que o cadastro foi deletado com sucesso
        this.toastrService.success('Seu cadastro foi deletado com sucesso, você será redirecionado em alguns instantes.', 'Aeehoo!', {
          timeOut: 5000
        });
        setTimeout(() => {
          this.redirect();
        }, 5000)
      }else{

        //Retorna mensagem do tipo Toast para o usuário informando que o cadastro não foi realizado
        this.toastrService.error("Contate o suporte para mais informações", 'Ooops algo deu errado...', {
          timeOut: 5000

        });
      }
    });
  }

  redirect(){
    this.transportadoraModel = null;
    this.router.navigate(['/']);
  }

}
