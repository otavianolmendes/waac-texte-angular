import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopBarComponent } from './header/header-top-bar/header-top-bar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SliderAreaComponent } from './header/slider-area/slider-area.component';
import { AboutComponent } from './about/about.component';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { TrilhasComponent } from './trilhas/trilhas.component';
import { CallComponent } from './call/call.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopBarComponent,
    NavbarComponent,
    SliderAreaComponent,
    AboutComponent,
    AboutComponent,
    CotacaoComponent,
    TrilhasComponent,
    CallComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
