import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Ofertas } from '../ofertas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas-add',
  templateUrl: './ofertas-add.component.html',
  styleUrls: ['./ofertas-add.component.css']
})
export class OfertasAddComponent implements OnInit {

  oferta: Ofertas = {
    id: 0,
    title: "",
    description: "",
    discount: 0,
    expiryDate: new Date()
  };
  errorMessage: string;

  constructor(private ofertasService: OfertasService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(oferta: Ofertas) {
    oferta.id = null;
    this.ofertasService.addOferta(oferta).subscribe(
      new_oferta => {
        this.oferta = new_oferta;
        this.goToOfertasList();
      }
    );
  }
  goToOfertasList() {
    this.router.navigate(['/ofertas']);
  }


}
