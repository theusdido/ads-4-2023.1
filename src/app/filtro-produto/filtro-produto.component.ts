import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProdutoService } from '../service/produto.service';

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
  ){}

  carregar(){
    let produto = this.produto_service.registro(Number(this.codigo_produto));
    if (produto != undefined){
      this.nome_produto   = produto.nome;
    }else{
      this.codigo_produto = '';
      this.nome_produto = '';
    }
  }
}
