import { Component, OnInit } from '@angular/core';
import { country } from './model/country';
import { Contact } from './model/Contact'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Template Driven Form';


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
      //isToc: true,
      email: "",
       city: "",
        street: "",
        zip_code: ""
    }
 
  }

  
  onSubmit(contactForm: any) {

    alert("You have submitted the form on submit! Now let's see if contactForm is invalid: "+contactForm.invalid);

    if(contactForm){
    console.log(contactForm.value);
  }else{
    console.log("ERROR! contactForm === false! ")
  }
}
}
