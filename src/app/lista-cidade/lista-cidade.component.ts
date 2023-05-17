import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../service/cidade.service';
import { Cidade } from '../interface/cidade';

@Component({
  selector: 'app-lista-cidade',
  templateUrl: './lista-cidade.component.html',
  styleUrls: ['./lista-cidade.component.css']
})
export class ListaCidadeComponent implements OnInit{
  public cidade:string = '';
  public cidades:Array<Cidade> = [];

  constructor(
    public cidade_service:CidadeService
  ){}
  
    ngOnInit(): void {
      this.cidades = this.cidade_service.carregar();
    }
}
