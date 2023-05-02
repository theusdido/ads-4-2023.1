import { Injectable } from '@angular/core';
import { Produto } from '../cadastro-produto/cadastro-produto.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public produtos:Array<Produto> = [];
  constructor() { }

  carregar(){
    this.produtos = JSON.parse(String(localStorage.getItem('produto')));
    console.log(this.produtos);
  }

  excluir(indice:number){
    this.produtos.splice(indice,1);
    this.salvar();
  }  

  salvar(){
    localStorage.setItem('produto',JSON.stringify(this.produtos));
  }
}
