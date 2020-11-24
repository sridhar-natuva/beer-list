import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  beerBrands: any = [];
  constructor(private _beerCraftService: BeerService) { }

  ngOnInit() {
    this._beerCraftService.getBeerBrands().subscribe(res => this.beerBrands = res);
  }

}
