import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { OfertasService} from './ofertas.service';
import { OfertasAddComponent } from './ofertas-add/ofertas-add.component';
import { OfertasEditComponent } from './ofertas-edit/ofertas-edit.component';
import { OfertasListComponent } from './ofertas-list/ofertas-list.component';
import { OfertasHomeComponent } from './ofertas-home/ofertas-home.component';
import { OfertasRoutingModule} from './ofertas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OfertasRoutingModule
  ],
  declarations: [
    OfertasAddComponent, 
    OfertasEditComponent, 
    OfertasListComponent, 
    OfertasHomeComponent
    ],
  providers: [OfertasService]
})
export class OfertasModule { }
