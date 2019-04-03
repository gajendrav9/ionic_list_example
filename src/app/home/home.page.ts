import { Component, OnInit } from '@angular/core';
import { ItemlistService } from '../api/itemlist.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  itemsListArray: Array<any>;

  constructor(
    public itemService: ItemlistService
  )
  {

  }

  ngOnInit(){
    //throw new Error("Method not implemented.");
    this.itemsListArray=this.itemService.getItems();
    alert(JSON.stringify(this.itemsListArray));
  }

}
