import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VillanosPelis } from '../interfaces/villanos.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  private baseUrl:string=environment.baseUrl;

  constructor(private http: HttpClient) { }
  getVillanos(): Observable<VillanosPelis[]> {
    return this.http.get<VillanosPelis[]>(`${this.baseUrl}/villanos`)
  }
  getVillanosPorId(id:string): Observable<VillanosPelis> {
    return this.http.get<VillanosPelis>(`${this.baseUrl}/villanos/${id}`);
  }
  getSugerencias(termino:string): Observable<VillanosPelis[]>{
    return this.http.get<VillanosPelis[]>(`${this.baseUrl}/villanos?q=${termino}&_limit=6`);
  }
  agregarVillano(villano:VillanosPelis): Observable<VillanosPelis>{
    return this.http.post<VillanosPelis>(`${this.baseUrl}/villanos`, villano);
  }
}

