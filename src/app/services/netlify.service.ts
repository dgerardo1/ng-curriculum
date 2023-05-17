import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetlifyService {

  constructor( private http: HttpClient ) { }

  getSites() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer o0Dk8IA1fYAPH2Ax5IWfd6HIXOExwYtuEhJ4nBtRX0A',
    });

    const requestOptions = { headers: headers };

    this.http.get('https://api.netlify.com/api/v1/sites', requestOptions ).subscribe( resp => {
      console.log(resp);
    });
  }
}
