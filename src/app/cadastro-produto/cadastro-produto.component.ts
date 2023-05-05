import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

export interface Produto{
  nome:string,
  valor:number
}

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit{
  public nome:string = '';
  public valor:number = 0;
  public indice:number = -1;

  constructor(
    public actived_route:ActivatedRoute,
    public produto_service:ProdutoService
  ){}
  
  ngOnInit(): void {
    this.actived_route.params
    .subscribe((params:any) => {
      // -1 significa que é um novo registro
      if (params.indice > -1){
        this.indice = params.indice;
        let produto = this.produto_service.registro(this.indice);
        this.nome   = produto.nome;
        this.valor  = produto.valor;
      }
    });
    
  }
  salvar(){
    let produto:Produto = {
      nome:this.nome,
      valor:this.valor
    }

    if (this.indice > -1){
      this.produto_service.update(this.indice,produto);
    }else{
      this.produto_service.produtos.push(produto);
      this.produto_service.salvar();
    }
    this.limpar();
  }

  limpar(){
    this.nome   = '';
    this.valor  = 0;
  }
}
