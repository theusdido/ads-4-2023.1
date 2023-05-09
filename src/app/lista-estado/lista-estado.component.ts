import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-estado',
  templateUrl: './lista-estado.component.html',
  styleUrls: ['./lista-estado.component.css']
})
export class ListaEstadoComponent {
  public estado:string = 'SC';
  public emitir_estado = new EventEmitter();

  getEstado():string{
    this.emitir_estado.emit();
    return this.estado;
  }
}
