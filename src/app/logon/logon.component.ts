import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent {
  public email:string = '';
  public senha:string = '';

  constructor(
    public router:Router
  ){  
  }
  autenticar(){
    let usuario_ls = JSON.parse(String(localStorage.getItem('usuario')));
    let email_ls = usuario_ls.email;
    let senha_ls = atob(usuario_ls.senha);

    if (email_ls == this.email && senha_ls == this.senha){
      // Permitir Acesso ...
      this.router.navigateByUrl('/home');
    }else{
      alert('Não Permitido');
      // Negar Acesso ...
    }
  }
}
