import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/persona/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Persona[]> {

    return this.httpClient.get<Persona[]>(this.URL + 'lista');

  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `detailName/${nombre}`);
  }

  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', persona);
  }

  public upDate(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `editar/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  public getPersona(): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + 'traer/perfil');
  }

}