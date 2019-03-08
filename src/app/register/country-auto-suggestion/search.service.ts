import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Interceptor } from '../../shared/http-interceptors/interceptor';

const endpoint = 'https://restcountries-v1.p.rapidapi.com/all';

// const headers = new HttpHeaders({
//   "X-RapidAPI-Key": "6a8b1cafa5msh650af5defa86891p1d6fa6jsn0616888a7d4c"
// })

//const endpoint = 'https://restcountries.eu/rest/v2/all'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // getCountries(): Observable<any> {
  //   return this.httpClient.get(endpoint + 'all').pipe(
  //     map(this.extractData));
  // }

  getCountry(): Observable<any> {
    return this.httpClient.get(endpoint) 
      //{headers: headers})
    .pipe(
          map(this.extractData));;
  } 



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}