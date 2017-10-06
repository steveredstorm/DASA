import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../app/models/user';
import { GUID } from '../../app/models/guid';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  user: User;
  firstname: string;
  lastname: string;

  constructor(public navCtrl: NavController) {
    this.user = new User();
    this.firstname = '';
    this.lastname = '';
  }

  setName(firstName: string, lastName: string) {
    this.user.fname = firstName;
    this.user.lname = lastName;
  }

  setId(user: User) {
    user.id = new GUID();
  }

  createUser(firstname: string, lastname:string){
    this.setName(firstname, lastname);
    this.setId(this.user);
  }
}
