import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(private router: Router){}

  verify:string ="proceed"

  ngOnInit(): void {
  }

  proceedfun()
  {
    //this.verify="proceeding"
    this.router.navigate(['predect-page'])
  }

}
