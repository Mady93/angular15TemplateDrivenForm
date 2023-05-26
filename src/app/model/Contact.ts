export class Contact {
    firstname: string;
    lastname: string;
    gender: string;
    //isToc: boolean;
    email: string;
    city: string;
    street: string;
    zip_code: string;
    

    constructor(firstname: string, lastname: string, gender: string, /*isToc: boolean,*/ email: string,city: string, street: string, zip_code: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        //this.isToc = isToc;
        this.email = email;
        this.city = city;
        this.street = street;
        this.zip_code = zip_code;
    }
}