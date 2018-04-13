import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {HttpResponse, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import{Ofertas} from './ofertas';
import {environment} from '../../environments/environment';

@Injectable()
export class OfertasService {
  private entity_url = environment.REST_API2_URL + 'ofertas';

  constructor(private _http: Http) { }

  getOfertas(): Observable<Ofertas[]> {
    return this._http.get(this.entity_url)
      .map((response: Response) => <Ofertas[]> response.json())
      .catch(this.handleError);
  }
  addOferta(oferta: Ofertas): Observable<Ofertas> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this._http.post(this.entity_url, JSON.stringify(oferta), {headers})
      .map((response: Response) => <Ofertas> response.json())
      .catch(this.handleError);
  }
  updateOferta(oferta_id: number, oferta: Ofertas): Observable<Ofertas> {
    const body = JSON.stringify(oferta);
    const headers = new Headers({'Content-Type': ' application/json;charset=UTF-8'});
    const options = new RequestOptions({headers: headers});
    return this._http.put((this.entity_url + '/' + oferta_id), body, options)
      .map((response: Response) => response)
      .catch(this.handleError);
  }
  deleteOferta(oferta_id: number): Observable<Ofertas> {
    return this._http.delete((this.entity_url + '/' + oferta_id))
      .map((response: Response) => <Ofertas> response.json())
      .catch(this.handleError);
  }
  private handleError(error: Response | any) {
    console.log('handleError log: ');
    let errMsg: string;
    if (error instanceof Response) {
      if (!(error.text() === '' )) {  // if response body not empty
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        console.log('binding errors header not empty');
        errMsg = error.headers.get('errors').toString();
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
