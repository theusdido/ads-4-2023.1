import { Injectable } from '@angular/core';
import { Cidade } from '../interface/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  public cidades:Array<Cidade> = [];
  constructor() { }

  carregar(){
    this.cidades = JSON.parse(String(localStorage.getItem('cidade')));
    return this.cidades;
  }

  excluir(indice:number){
    this.cidades.splice(indice,1);
    this.salvar();
  }  

  salvar(){
    localStorage.setItem('cidade',JSON.stringify(this.cidades));
  }

  update(indice:number,cidade:Cidade){
    this.cidades[indice] = cidade;
    this.salvar();
  }

  registro(indice:number){
    this.cidades = this.carregar();
    return this.cidades[indice];
  }    
}
