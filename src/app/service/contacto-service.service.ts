import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../model/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {

  URLcont = 'https://datosapback.herokuapp.com/contacto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Contacto[]> {
    return this.httpClient.get<Contacto[]>(this.URLcont + 'lista');
  }

  public detail(id: number): Observable<Contacto> {
    return this.httpClient.get<Contacto>(this.URLcont + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Contacto> {
    return this.httpClient.get<Contacto>(this.URLcont + `detailName/${nombre}`);
  }

  public save(contacto: Contacto): Observable<any> {
    return this.httpClient.post<any>(this.URLcont + 'create', contacto);
  }

  public update(id: number, contacto: Contacto): Observable<any> {
    return this.httpClient.put<any>(this.URLcont + `update/${id}`, contacto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URLcont + `delete/${id}`);
  }

}
