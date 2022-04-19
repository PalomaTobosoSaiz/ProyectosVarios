import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set ('fields', 'name;capital;currencies;population'); 
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capitak/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {

    const params = new HttpParams()
    .set ('fields', 'name;capital;currencies;population'); 

    const url = `${this.apiUrl}/region/${region}??fields=name,capital,currencies;population`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
    .pipe(
      tap (console.log)
    )
  }
}
