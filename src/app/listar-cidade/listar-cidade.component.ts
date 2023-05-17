import { Component } from '@angular/core';
import { CidadeService } from '../service/cidade.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent {
  faEdit = faEdit;
  faTrash = faTrash;  

  constructor(
    public cidade_service:CidadeService,
    public router:Router
  ){    
  }

  ngOnInit(): void {
    this.cidade_service.carregar();
  }

  editar(indice:number){
    this.router.navigateByUrl('cidade/' + indice);
  }  
}
