import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartaoComponent } from './cartao/cartao.component';
import { CriarCartaoComponent } from './criar-cartao/criar-cartao.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartaoComponent,
    CriarCartaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
