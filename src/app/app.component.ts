import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me, do this in html <my-app>
  template: `

  <h1>Hello {{name}}</h1>

  <p><i>{{name}} is in the {{region}} region</i></p>
  <button (click) = addressClick()>Show/Hide Address</button>
  <div [hidden] = "hideAddress">
    <fieldset>
      <label>Street:{{street}}</label>
    </fieldset>
    <fieldset>
      <label>City:{{city}}</label>
    </fieldset>
    <fieldset>
      <label>Region:</label>
      <select (change) = "regionChange($event.target.value)">
        <option>East</option>
        <option>North</option>
        <option>South</option>
        <option>West</option>
    </select>
    </fieldset>

  </div>
  <fieldset>
    <img src= {{image}}/>
    <img [src] = "image" />
  </fieldset>
  <label [style.color]="color">Favorite color</label>


  `,
})
export class AppComponent  {

  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'red';
  street = 'main street';
  city = 'Edison';
  region = 'NJ';
  status = 'Hide';
  hideAddress = false;

  clicked(){
  this.status = this.status === 'Hide' ? 'Show' : 'Hide'
  }
  addressClick(){
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string){
    this.region = region;
  }
 }
