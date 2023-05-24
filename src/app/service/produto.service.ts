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
    return this.produtos;
  }

  excluir(indice:number){
    this.produtos.splice(indice,1);
    this.salvar();
  }  

  salvar(){
    localStorage.setItem('produto',JSON.stringify(this.produtos));
  }

  update(indice:number,produto:Produto){
    this.produtos[indice] = produto;
    this.salvar();
  }

  registro(indice:number):any{
    let _produto:any;
    try{
      this.produtos = this.carregar();
      return this.produtos[indice];
    }catch(e){
      return _produto;
    }
  }  
}
