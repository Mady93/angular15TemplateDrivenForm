import { Component } from '@angular/core';
import {
  country
} from './model/country';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7TemplateDrivenForm';

  countryList: country[] = [
    new country("1", "India"),
    new country("2", "Usa"),
    new country("3", "England"),
  ];

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}
