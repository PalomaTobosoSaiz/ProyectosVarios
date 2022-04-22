import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VillanosPelis } from '../interfaces/villanos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  constructor(private http: HttpClient) { }
  getVillanos(): Observable<VillanosPelis[]> {
    return this.http.get<VillanosPelis[]>('http://localhost:3000/villanos')
  }

}

