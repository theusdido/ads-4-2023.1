import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public cliente:string = '';
  public produto:string = '';  
  public quantidade:number = 1;
  public valor:number = 0;

  public display_recibo:boolean = false;
  public display_form:boolean = true;

  inc(){
    this.quantidade++;
  }

  dec(){
    if (this.quantidade > 1){
      this.quantidade--;
    }
  }

  showRecibo(){
    this.display_recibo = true;
    this.display_form = false;
  }
  showForm(){
    this.display_recibo = false;
    this.display_form = true;    
  }
  valorTotal():number{
    return this.quantidade * this.valor;
  }
}
