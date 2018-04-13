import { Component, OnInit } from '@angular/core';
import { Ofertas } from '../ofertas';
import {OfertasService} from '../ofertas.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ofertas-edit',
  templateUrl: './ofertas-edit.component.html',
  styleUrls: ['./ofertas-edit.component.css']
})
export class OfertasEditComponent implements OnInit {

  oferta: Ofertas;
  errorMessage: string;

  constructor(private ofertaService: OfertasService, private route: ActivatedRoute, private router: Router) {
    this.oferta = <Ofertas>{};
   }

  ngOnInit() {
  }

  onSubmit(oferta: Ofertas) {
    const that = this;
    this.ofertaService.updateOferta(oferta.id, oferta).subscribe(
      get_result,
      get_error
    );

    function get_error(error) {
      console.log(error);
      console.log('error catched');
      return this.errorMessage = <any> error;
    }

    function get_result(update_status) {
      console.log(update_status);
      if (update_status.status === 204) {
        console.log('update success');
        that.gotoOfertaDetail(oferta);
      } else {
        return console.log('update failed');
      }
    }
  }

  gotoOfertaDetail(oferta: Ofertas) {
    this.router.navigate(['/ofertas', oferta.id]);
  }

}
