import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BindingHw';

  products = [
    {
      name: `Lightning McQueen Light Up Crocs Men’s Size`,
      price: 99.99,
      left_in_storage: 1,
      image: `https://i.ebayimg.com/images/g/6zAAAOSwTnllIAMu/s-l1600.webp`,
      description: `trusted retailer, lightning fast delivery, no delivery damage.`
    },
    {
      name: `Lightning McQueen Light Up Crocs Men’s Size`,
      price: 99.99,
      left_in_storage: 1,
      image: `https://i.ebayimg.com/images/g/6zAAAOSwTnllIAMu/s-l1600.webp`,
      description: `trusted retailer, lightning fast delivery, no delivery damage.`
    },
    {
      name: `Lightning McQueen Light Up Crocs Men’s Size`,
      price: 99.99,
      left_in_storage: 1,
      image: `https://i.ebayimg.com/images/g/6zAAAOSwTnllIAMu/s-l1600.webp`,
      description: `trusted retailer, lightning fast delivery, no delivery damage.`
    },
    {
      name: `Lightning McQueen Light Up Crocs Men’s Size`,
      price: 99.99,
      left_in_storage: 1,
      image: `https://i.ebayimg.com/images/g/6zAAAOSwTnllIAMu/s-l1600.webp`,
      description: `trusted retailer, lightning fast delivery, no delivery damage.`
    }
    //vitom apidan vadzrob
  ]


}
