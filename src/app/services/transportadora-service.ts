import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Transportadora } from '../models/transportadora';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {
  private baseURL =  'http://localhost:8080/api';
  private header = new HttpHeaders();
  constructor(private http: HttpClient) { }

  getTransportadoraPorId(id: number){
    return this.http.get<Transportadora>(`${this.baseURL}/transportadora/${id}`);
  }

  getTransportadoras(): Observable<Transportadora[]> {
    return this.http.get<Transportadora[]>(`${this.baseURL}/transportadoras`);
  }

  getEnderecoViaCEP(cep: string){
    return this.http.get(`http://viacep.com.br/ws/${cep}/json/`);
  }

  getMesorregioes(){
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes');
  }

  cadastrar(transportadora: Transportadora){
    return this.http.post(`${this.baseURL}/transportadora/cadastrar`, transportadora);
  }

  deletar(id: number){
    return this.http.delete(`${this.baseURL}/transportadora/deletar/${id}`);
  }

  atualizar(id: number, transportadoraAtualizar: Transportadora){
    return this.http.post(`${this.baseURL}/transportadora/atualizar/${id}`, transportadoraAtualizar)
  }
}
