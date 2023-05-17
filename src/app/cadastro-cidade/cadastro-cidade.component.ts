import { AfterViewInit, Component,OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CidadeService } from '../service/cidade.service';
import { Cidade } from '../interface/cidade';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit,AfterViewInit {

  public indice:number = -1;
  public nome:string = '';
  public estado:string = '';
  @ViewChild('lista_estado_component') lista_estado:any;
  
  constructor(
    public activated_route:ActivatedRoute,
    public cidade_service:CidadeService
  ){}

  ngOnInit(): void {
    this.activated_route.params
    .subscribe((params:any) => {
      // -1 significa que é um novo registro
      if (params.indice > -1){
        this.indice   = params.indice;
        let cidade    = this.cidade_service.registro(this.indice);
        this.nome     = cidade.nome;
        this.estado   = cidade.estado;        
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.indice < 0){
        this.setEstadoPadrao();
      }else{
        this.lista_estado.setEstado(this.estado);
      }
    });
  }

  salvar(){
    let cidade:Cidade = {
      nome:this.nome,
      estado:this.lista_estado.getEstado()
    }

    if (this.indice > -1){
      this.cidade_service.update(this.indice,cidade);
    }else{
      this.cidade_service.cidades.push(cidade);
      this.cidade_service.salvar();
    }
    this.limpar();  }

  limpar(){
    this.nome = '';
    this.setEstadoPadrao();
  }

  setEstadoPadrao(){
    this.lista_estado.setEstado('SC');
  }
}
