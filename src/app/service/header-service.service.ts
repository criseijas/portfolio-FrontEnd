import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Header } from '../model/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  headerURL = 'http://localhost:8080/header/'

  constructor(private httpClient: HttpClient) { }

  public detail(id: number): Observable<Header> {
    return this.httpClient.get<Header>(this.headerURL + `detail/${id}`);
  }

  public save(header: Header): Observable<any> {
    return this.httpClient.post<any>(this.headerURL + 'create', header);
  }

  public update(id: number, header: Header): Observable<any> {
    return this.httpClient.put<any>(this.headerURL + `update/${id}`, header);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.headerURL + `delete/${id}`);
  }

  public getPerfil(): Observable<Header> {
    return this.httpClient.get<Header>(this.headerURL + 'foto/perfil');
  }

}
