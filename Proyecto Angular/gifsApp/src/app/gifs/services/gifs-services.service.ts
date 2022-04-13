import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {
  private apiKey: string = 'BxWVkLob6Q52h4Ph3L6qgvp8XnfD1Rcm';
  private _historial: string[] = [];

    public resultados: any[]=[];

  get historial() {
    return [...this._historial];
  }

    constructor(private http:HttpClient){}  

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial',query);


    }
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=BxWVkLob6Q52h4Ph3L6qgvp8XnfD1Rcm&q=dragon_ball')
    //   .then(resp => {
    //     resp.json().then(data => {
    //       console.log(data);
    //       this.resultados=data;
    //     })
    //   })

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=BxWVkLob6Q52h4Ph3L6qgvp8XnfD1Rcm&q=dragon ball z&limit=10')
    .subscribe((resp:any) => {
      console.log(resp.data);
      this.resultados=resp.data;
    });



  }
}
