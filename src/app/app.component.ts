import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nome:string = '';
  public datanascimento:string = '';

  public borda_nome:string = '';
  public borda_datanascimento:string = '';

  salvar():boolean {
    if (this.nome == ''){
      this.borda_nome = 'border:1px solid #FF0000';
      return false;
    }
    if (this.datanascimento == ''){
      this.borda_datanascimento = 'border:1px solid #FF0000';
      return false;
    }

    let dt = this.datanascimento
    .replace('/','').replace('/','');

    if (dt.length != 8 || !this.isValidDate(this.datanascimento)){
      this.borda_datanascimento = 'border:1px solid #FF0000';
      return false;     
    }

    return true;
  }

  isValidDate(data:string):boolean{
    let partes = data.split('/');
    let dia:number = parseInt(partes[0]);
    let mes:number = parseInt(partes[1]);
    let ano:number = parseInt(partes[2]);

    if (dia < 1 || dia > 31){
      return false;
    }
    if (mes < 1 || mes > 12){
      return false;
    }
    if (mes == 2 && dia > 29){
      return false;
    }
    return true;
  }
}
