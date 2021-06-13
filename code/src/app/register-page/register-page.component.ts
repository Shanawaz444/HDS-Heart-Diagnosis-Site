import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  constructor() {
    this.name="";
    this.email="";
    this.password="";
   }

  ngOnInit(): void {
  }

  validate_inputs(){
    console.log(this.name,this.email,this.password)
  }
}
