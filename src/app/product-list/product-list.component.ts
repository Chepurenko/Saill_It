import { Component, OnInit } from '@angular/core';
import {DataService} from '../core/data.service';
import {DataModel} from '../core/data.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public data: DataModel[];
  public isReadyToScroll: boolean;
  constructor(private dataService: DataService) {
    this.isReadyToScroll = true;
  }

  ngOnInit() {
  this.dataService.getData().subscribe((res: DataModel[]) => {this.data = res; });
  }
  addItem() {
    this.isReadyToScroll = false;
    this.dataService.getNextData()
      .subscribe(
        (res: DataModel[]) => {
          this.data = this.data.concat(res);
          console.log(this.data);
        },
        err => console.error(err),
        () => {
          this.isReadyToScroll = (!!this.dataService.nextPage);
        }
      );
  }
}
