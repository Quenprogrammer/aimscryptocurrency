import { Component } from '@angular/core';
import {countriesCurrencies} from "../../../system/DATA/currency/currency";

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [],

  template: `<div class="col d-flex justify-content-center">
    <div class="col-12  d-flex justify-content-center ">
      <div class="col-9"  >
        <div class="row">
          @for(items of countriesCurrencies; track items.name){
            <div class="col-4 col-md-3 text-center" >
              <img style="width: 50%;" [src]=items.logo alt="Square image">
              <p class="text-center">{{items.name}}</p>
            </div>

          }
        </div>

      </div></div>
  </div>
  `,

})
export class CurrencyComponent {

  protected readonly countriesCurrencies = countriesCurrencies;

}
