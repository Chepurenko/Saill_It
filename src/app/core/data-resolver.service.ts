import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {DataOwner} from './data.model';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertResolverService implements Resolve<DataOwner> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DataOwner> {
    const id = +route.params['id'];
    return this.dataService.readData(id);
  }
}
