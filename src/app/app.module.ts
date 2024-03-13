import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { InterfaceComponent } from './interface/interface.component'

import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
