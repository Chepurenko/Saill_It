import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewProductService} from './new-product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  advertForm: FormGroup;

  constructor(private fb: FormBuilder, private addAdvertService: NewProductService) {
    this.advertForm = fb.group({
      theme: ['', Validators.required],
      text: '',
      price: [0, Validators.min(0)],
      currency: 1,
      contract_price: false,
      location: this.fb.group({
        name: ''
      }),
      is_active: true
    });
  }

  get theme(): FormControl {return this.advertForm.get('theme') as FormControl; }
  get price(): FormControl {return this.advertForm.get('price') as FormControl; }

  ngOnInit() {
    this.advertForm.get('currency').disable();
  }

  onSubmit() {
    this.addAdvertService.postAdvert(this.advertForm.value);
  }
}
