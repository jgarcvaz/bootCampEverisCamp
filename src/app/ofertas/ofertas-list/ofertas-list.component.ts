
import { Component, OnInit, NgModule } from '@angular/core';
import { Ofertas } from '../ofertas';
import 'rxjs/Rx';
import { OfertasService } from '../ofertas.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ofertas-list',
  templateUrl: './ofertas-list.component.html',
  styleUrls: ['./ofertas-list.component.css']
})
export class OfertasListComponent implements OnInit {

  ofertas: Ofertas[];
  constructor(private router: Router, private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertas().subscribe(
      ofertas => this.ofertas = ofertas);

  }
  delete(ofertaid){
    this.ofertasService.deleteOferta(ofertaid);
  }

}
