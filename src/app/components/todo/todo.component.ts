import { Component, OnInit } from '@angular/core';
import { Iitems } from '../iitems';
import {ItemsService} from '../items.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

// example 1 
  userdataList: string[] = [];


// example 2
  allitems?: Iitems[];

  constructor(private ItemsService:ItemsService) { }

  ngOnInit(): void {
    this.allitems = this.ItemsService.getallusers();
  }


// example 1
adduser(userdata:string){
  this.userdataList.push(userdata);
  console.log(this.userdataList);
}





// example 2
  pushItem(newid:number=0, newcontent:string='') {
    this.allitems = this.ItemsService.pushItem({id:newid, content:newcontent});
  }

  dropItem(index:number=0){
    this.ItemsService.dropItems(index);
  }

  filterItem(characters:string){
    this.allitems = this.ItemsService.filterItem(characters);
  }

}
