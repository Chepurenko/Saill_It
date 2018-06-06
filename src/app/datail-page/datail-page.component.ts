import { Component } from '@angular/core';

@Component({
  selector: 'app-datail-page',
  templateUrl: './datail-page.component.html',
  styleUrls: ['./datail-page.component.scss']
})
export class DatailPageComponent {

   include(url) {
    const script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
  }
}



