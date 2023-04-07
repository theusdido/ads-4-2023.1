import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public estados:Array<any> = [
    {sigla:'SC' , nome:'Santa Catarina'},
    {sigla:'PR' , nome:'Paraná'},
    {sigla:'RS' , nome:'Rio Grande do Sul'},
  ];

  public cidades:Array<any> = [
    {id:1 , nome:'Criciúma' , estado: 'SC'},
    {id:2 , nome:'Porto Alegre' , estado: 'RS'},
    {id:3 , nome:'Curitiba' , estado: 'PR'},
    {id:4 , nome:'Florianópolis' , estado: 'SC'},
    {id:5 , nome:'Flores da Cunha' , estado: 'RS'},
    {id:6 , nome:'Içara' , estado: 'SC'},
    {id:7 , nome:'Criciúma' , estado: 'PR'}
  ];
  
  public estado:string = 'SC';
}
