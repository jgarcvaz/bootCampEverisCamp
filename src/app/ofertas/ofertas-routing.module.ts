import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OfertasListComponent} from './ofertas-list/ofertas-list.component';
import {OfertasEditComponent} from './ofertas-edit/ofertas-edit.component';
import {OfertasAddComponent} from './ofertas-add/ofertas-add.component';

const ofertasRoutes: Routes = [
  {path: 'ofertas', component: OfertasListComponent},
  {path: 'ofertas/add', component: OfertasAddComponent},
  {path: 'ofertas/:id/edit', component: OfertasEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ofertasRoutes)],
  exports: [RouterModule]
})

export class OfertasRoutingModule {
}
