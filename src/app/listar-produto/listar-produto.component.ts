import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../cadastro-produto/cadastro-produto.component';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit{
  faEdit = faEdit;
  faTrash = faTrash;
  
  constructor(
    public produto_service:ProdutoService,
    public router:Router
  ){}
  ngOnInit(): void {
    //this.produto_service.carregar();
  }

  editar(indice:number){
    this.router.navigateByUrl('produto/' + indice);
  }
}