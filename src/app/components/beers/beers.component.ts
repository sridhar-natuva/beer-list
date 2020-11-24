import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Beer } from 'src/app/modals/beer.modal';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  beerBrands: any = [];
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<Beer>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  constructor(private _beerCraftService: BeerService) { }

  ngOnInit() {
    this._beerCraftService.getBeerBrands().subscribe(res => this.beerBrands = res);
    this._beerCraftService.getBeerCraft().subscribe(res => {
      this.beers = res;
    });
  }

}
