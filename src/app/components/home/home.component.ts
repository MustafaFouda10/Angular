import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // homeName?:string;
  // days= ['sat','sun','mon'];
  // isValid = false;
  // people: any[] = [
  //   {"id":1 , "country":"egypt"},
  //   {"id":2 , "country":"usa"},
  //   {"id":3 , "country":"uk"},
  //   {"id":4 , "country":"egypt"},
  //   {"id":5 , "country":"uk"}
  // ];

    peopleByCountry: any[] = [
      { 'country': 'UK', 'people': [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] },
      { 'country': 'US', 'people': [ { "name": "Day Meyers" }, { "name": "Aguirre Ellis" }, { "name": "Cook Tyson" } ] },
      { 'country': 'MARS', 'people': [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] } 
    ];


  constructor() { }

  ngOnInit(): void {

  }

}
