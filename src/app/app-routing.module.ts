import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LogonComponent } from './logon/logon.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path: 'cidade', component: ListarCidadeComponent },
  { path:'usuario', component:CadastroUsuarioComponent},
  { path:'logon', component:LogonComponent},
  { path:'produto', component:ListarProdutoComponent},
  { path:'produto/:indice', component:CadastroProdutoComponent},
  { path:'cidade/:indice', component:CadastroCidadeComponent},
  { path:'cliente' , component:CadastroClienteComponent},
  { path:'venda' , component:VendaComponent }
];

@NgModule({  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
