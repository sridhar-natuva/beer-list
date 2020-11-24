import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
  displayedColumns: string[] = ['avatar', 'id', 'name', 'abv', 'ibu', 'style', 'ounces'];
  dataSource: MatTableDataSource<Beer>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private _beerCraftService: BeerService) { }

  ngOnInit() {
    this._beerCraftService.getBeerBrands().subscribe(res => this.beerBrands = res);
    this._beerCraftService.getBeerCraft().subscribe(res => {
      this.beers = res;
      this.dataSource = new MatTableDataSource(this.beers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
