import { Component } from '@angular/core';

export interface Produto{
  nome:string,
  valor:number
}

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  public nome:string = '';
  public valor:number = 0;
  public produtos:Array<Produto> = [];
  
  salvar(){
    let produto:Produto = {
      nome:this.nome,
      valor:this.valor
    }

    this.produtos.push(produto);
    localStorage.setItem('produto',JSON.stringify(this.produtos));
  }

  limpar(){
    this.nome   = '';
    this.valor  = 0;
  }
}
