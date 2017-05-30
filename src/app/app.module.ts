import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BotonSiNoComponent } from './boton-si-no/boton-si-no.component';
import { ListadoPreguntasComponent } from './listado-preguntas/listado-preguntas.component';
import { LoginComponent } from './login/login.component';
import { UsuariosService, Usuario } from './login/usuarios.service';
import { VentasComponent } from './ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonSiNoComponent,
    ListadoPreguntasComponent,
    LoginComponent,
    VentasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
