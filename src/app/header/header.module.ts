import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderTopBarComponent } from './header-top-bar/header-top-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderAreaComponent } from './slider-area/slider-area.component';
import { CotacaoComponent } from '../cotacao/cotacao.component';

@NgModule ({
  declarations: [
    HeaderTopBarComponent,
    NavbarComponent,
    SliderAreaComponent,
    CotacaoComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class HeaderModule {}
