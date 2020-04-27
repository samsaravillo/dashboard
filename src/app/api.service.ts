import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Smartphone } from './api.interface';
import { Observable } from 'rxjs';

const localUrl = 'assets/sample.json';
const API_KEY = 'ae0d0b0e7bmsh55f358f021b3e5fp16cb70jsn55710aa03ccf';    //'YOUR_API_KEY';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-rapidapi-key': API_KEY
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  allTeamsUrl = 'https://free-nba.p.rapidapi.com/teams';

  public getAllTeams(){
    return this.http.get(this.allTeamsUrl, httpOptions);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getSmartphone():Observable<HttpResponse<Smartphone[]>> {
    return this.http.get<Smartphone[]>(localUrl, { observe: 'response'});
  }

}
