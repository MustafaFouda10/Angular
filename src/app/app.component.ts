import { Component } from '@angular/core';

// A decorator => responsible for metadata
@Component({
  // metadata
  selector: 'app-root',
  templateUrl: './app.component.html', // view 
  styleUrls: ['./app.component.css']
})

//class
export class AppComponent {
  //property
  title = 'my-app';
}
