import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/modals/beer.modal';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {



  constructor() { }

  ngOnInit() {
    // this._beerCraftService.getBeerCraft().subscribe(res => {
    //   this.beers = res;
    //   const count = {};
    //   this.beers.forEach(b => count[b.name] = (count[b.name] || 0) + 1);
    //   console.log(count);
    // });

  }

  ngAfterViewInit() {
    // console.log(this.beers);
    // const valueArr = this.beers.map(function (item) { return item.name; });
    // console.log(valueArr);

    // for (const beer of this.beers) {
    //   if()
    // }

  }

}
