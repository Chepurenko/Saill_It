import { Component, OnInit } from '@angular/core';
import {DataOwner} from '../core/data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datail-page',
  templateUrl: './datail-page.component.html',
  styleUrls: ['./datail-page.component.scss']
})
export class DatailPageComponent implements OnInit {
  dataOwner: DataOwner;
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        data => this.dataOwner = data.advert,
        err => console.error(err),
        () => console.log('complete reading advert')
      );
  }

 include(url) {
  const script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('body')[0].appendChild(script);
}
}




