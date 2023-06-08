import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SitesResponse } from '../interfaces/sites.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetlifyService {

  // public sitesList:SitesResponse[] = []

  constructor( private http: HttpClient ) { }

  getSites(): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer o0Dk8IA1fYAPH2Ax5IWfd6HIXOExwYtuEhJ4nBtRX0A',
    });
    const requestOptions = { headers: headers };
    return this.http.get('https://api.netlify.com/api/v1/sites', requestOptions);
  }
}
