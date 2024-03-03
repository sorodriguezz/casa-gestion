import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComprasComponent } from './compras/compras.component';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [AppComponent, ComprasComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    TableModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
