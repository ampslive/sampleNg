import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './models/team.model';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : Http) {

   }

   getTeamService() : Observable<Array<Team>>  {
    return this.http.get('http://www.json-generator.com/api/json/get/bUuWeTzXYi').pipe( 
      map((response : Response) => {
          return response.json()
          //return [{"ShortName": "IND", "Name": "India"}, {"ShortName": "AUS", "Name": "Australia"}]
      })
    ); 
  }
}
