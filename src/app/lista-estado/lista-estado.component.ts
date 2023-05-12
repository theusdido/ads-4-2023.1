import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-estado',
  templateUrl: './lista-estado.component.html',
  styleUrls: ['./lista-estado.component.css']
})
export class ListaEstadoComponent {
  public estado:string = 'SC';
  public emitir_estado = new EventEmitter();
  public emitir_set_estado = new EventEmitter();
  
  getEstado():string{
    this.emitir_estado.emit();
    return this.estado;
  }

  setEstado(estado:string){
    this.emitir_set_estado.emit();
    this.estado = estado;
  }
}
