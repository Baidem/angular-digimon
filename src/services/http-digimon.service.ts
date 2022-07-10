import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Digimon} from "../models/digimon";



@Injectable({
  providedIn: 'root'
})
export class HttpDigimonService {

  constructor(private httpClient: HttpClient) { }

  getDigimons(): Observable<Array<Digimon>> {
    console.log('https://digimon-api.herokuapp.com/api/digimon/level/');
    return this.httpClient.get<Array<Digimon>>('https://digimon-api.herokuapp.com/api/digimon');
  }

  getDigimonsByLevel(level: string): Observable<Array<Digimon>> {
    console.log('https://digimon-api.herokuapp.com/api/digimon/level/' + level);
    return this.httpClient.get<Array<Digimon>>('https://digimon-api.herokuapp.com/api/digimon/level/' + level);
  }


}
