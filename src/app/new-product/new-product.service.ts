import { Injectable } from '@angular/core';
import {DataOwner} from '../core/data.model';


@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  constructor() { }

  postAdvert(advert: DataOwner): void {
    console.log(advert);
  }
}
