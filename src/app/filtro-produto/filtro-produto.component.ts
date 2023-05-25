import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProdutoService } from '../service/produto.service';

declare var bootstrap:any;

@Component({
  selector: 'app-filtro-produto',
  templateUrl: './filtro-produto.component.html',
  styleUrls: ['./filtro-produto.component.css']
})
export class FiltroProdutoComponent {
  faSearch = faSearch;
  public codigo_produto:string = '';
  public nome_produto:string = '';
  constructor(
    public produto_service:ProdutoService
  ){
    this.produto_service.carregar();
  }

  carregar(){
    let produto = this.produto_service.registro(Number(this.codigo_produto));
    if (produto != undefined && this.codigo_produto != ''){
      this.nome_produto   = produto.nome;
    }else{
      this.codigo_produto = '';
      this.nome_produto = '';
    }
  }

  setProduto(indice_produto:number){
    this.codigo_produto = String(indice_produto);
    this.carregar();   

    let modal = bootstrap.Modal.getInstance(document.getElementById('lista-pesquisa-produto'));
    modal.hide();
  }
}
