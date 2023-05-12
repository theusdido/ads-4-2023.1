import { AfterViewInit, Component,OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit,AfterViewInit {

  public nome:string = '';
  public estado:string = '';
  @ViewChild('lista_estado_component') lista_estado:any;
  
  ngOnInit(): void {
    this.carregar();      
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.lista_estado.setEstado('PR');
    });
  }


  salvar(){
    console.log( this.lista_estado.getEstado() );
    localStorage.setItem('nome',this.nome);
    //localStorage.setItem('estado',this.estado);
  }

  limpar(){
    this.nome = '';
    localStorage.clear();
  }

  carregar(){
    this.nome = String(localStorage.getItem('nome'));
  }
}
