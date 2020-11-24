import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../modals/beer.modal';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  public getBeerCraft() {
    return this.http.get<Beer[]>(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json`);
  }

  public getBeerBrands() {
    return this.http.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json`);
  }

}
