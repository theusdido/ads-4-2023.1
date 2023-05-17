import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { ListaEstadoComponent } from './lista-estado/lista-estado.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LogonComponent } from './logon/logon.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { ListaCidadeComponent } from './lista-cidade/lista-cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCidadeComponent,
    ListaEstadoComponent,
    LayoutComponent,
    MenuComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    LogonComponent,
    CadastroProdutoComponent,
    ListarProdutoComponent,
    CadastroClienteComponent,
    ListarCidadeComponent,
    ListaCidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
