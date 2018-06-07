import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataModel, DataOwner} from './data.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI: string;
  private params: any;
  public nextPage: string;
  constructor(private http: HttpClient) {
    this.urlAPI = 'http://light-it-04.tk/api/adverts/';
    this.params = {
      'limit': '12',
      'offset': '0'
    };
  }
  getData(): Observable<DataModel[] | any> {
    return this.http.get(this.urlAPI, {params: this.params})
      .pipe(map((response: any) => {
        const results: DataModel[] = [];
        console.log(response);
        this.nextPage = response.next;
        response.results.forEach(item => results.push(new DataModel(item)));
        return results;
      }), tap(response => console.log(response)));
  }
  getNextData(): Observable<DataModel[]> {
    return this.http.get(this.nextPage)
      .pipe(map((response: any) => {
        const results: DataModel[] = [];
        console.log(response);
        this.nextPage = response.next;
        response.results.forEach(item => results.push(new DataModel(item)));
        return results;
      }), tap(response => console.log(response)));
  }
  public readData(id: number): Observable<DataOwner> {
    return this.http.get(`${this.urlAPI}${id}`)
      .pipe(
        map( (response: any) => new DataOwner(response) )
      );
  }
}
