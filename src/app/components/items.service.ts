import { Injectable } from '@angular/core';
import { Iitems } from './iitems';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  allItems: Iitems[] = [
    {id:1, content:'buy milk' },
    {id:2, content:'some eggs' },
    {id:3, content:'go to work' },
    {id:4, content:'reactjsexample.com' },
  ]

  getallusers(): Iitems[] {
    return this.allItems;
  }

  dropItems(index:number) {
    this.allItems.splice(index,1);
  }

  pushItem(item:Iitems) : Iitems[] {
    this.allItems.push(item);
    return this.allItems;
  }

  filterItem(characters:string) {
    return this.allItems.filter(x=>{
      return x.content.includes(characters);
    })
  }

}

