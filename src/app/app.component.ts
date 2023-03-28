import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public email:string = '';
  public dominio:string = 'alunos.sc.senac.br';

  salvar():boolean{
    if (this.email == ''){
      return false;
    }

    // username@dominio
    if (this.email.split('@')[1] != this.dominio){
      alert('Inválido!');
      return false;
    }
    alert('Salvo com sucesso!');
    return true;
  }
}
