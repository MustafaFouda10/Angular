import { Component, OnInit } from '@angular/core';
import { ForeignAPIService } from '../foreign-api.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {

  alldata: any;

  constructor(private foreignAPIservice:ForeignAPIService) { }

  ngOnInit(): void {
    this.foreignAPIservice.getAllData().subscribe(n=> this.alldata = n)
  }

}
