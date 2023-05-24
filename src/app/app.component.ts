import { Component, OnInit } from '@angular/core';
import { country } from './model/country';
import { Contact } from './model/Contact'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular7TemplateDrivenForm';

  countryList: country[] = [
    new country("1", "India"),
    new country("2", "Usa"),
    new country("3", "England"),
  ];

  contact: Contact;
   
  ngOnInit(){
    this.contact={
      firstname: "", 
      lastname: "",
      gender: "",
      isToc: true,
      email: ""
    }
 
  }
    
  
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}
