import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../cadastro-produto/cadastro-produto.component';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit{
  faEdit = faEdit;
  faTrash = faTrash;
  
  constructor(
    public produto_service:ProdutoService
  ){}
  ngOnInit(): void {
    this.produto_service.carregar();
  }
}