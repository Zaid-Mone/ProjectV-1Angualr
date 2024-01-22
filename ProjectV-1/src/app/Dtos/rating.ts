class rating {
    rate: number;
    count: number;
    constructor() {
        this.count = 0;
        this.rate = 0;
    }

}

class address {

}

class geolocation {
  "lat": "-37.3159",
  "long": "81.1496"
}

class Users {
  "address": {
    "geolocation": {
      "lat": "-37.3159",
      "long": "81.1496"
    },
    "city": "kilcoole",
    "street": "new road",
    "number": 7682,
    "zipcode": "12926-3874"
  },
  "id": 1,
  "email": "john@gmail.com",
  "username": "johnd",
  "password": "m38rmF$",
  "name": {
    "firstname": "john",
    "lastname": "doe"
  },
  "phone": "1-570-236-7033",
  "__v": 0






  id: number;
  email: string;
  username: string;
  password: string;
  phone: string;
  __v: number;
  name: name;

  constructor() {
    this.id = Number;
   this.email = String;
   this.username = String;
   this.password = String;
   this.phone = String;
   this.__v = Number;
    this.name = new name();
  }

}




class name {
  firstname: string;
  lastname: string;

  constructor() {
    this.firstname = '';
    this.lastname = '';
  }
}




