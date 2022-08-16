import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForeignAPIService {

  constructor(private httpClient:HttpClient) { }

  getAllData(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums/1/photos');
  }
}
