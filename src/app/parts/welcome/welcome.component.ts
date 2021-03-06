/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */


/**
 * @author Vitaliy Fedoriv
 */
import { Component, OnInit, NgModule } from '@angular/core';
import { Ofertas } from '../../ofertas/ofertas';
import 'rxjs/Rx';
import { OfertasService } from '../../ofertas/ofertas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  ofertas : Ofertas[];
  hoy: Date;

  constructor(private router: Router, private ofertasService : OfertasService) {
  }

  ngOnInit() {

    this.hoy = new Date();
    this.ofertasService.getOfertas().subscribe(
        ofertas => this.ofertas = ofertas
    );
  }

}
