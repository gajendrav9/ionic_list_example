import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemlistService {
  items: Array<any>;
  subitems:Array<any>;
  constructor() { }

  getItems(){

    this.subitems=[{
      title: 'Sub Title 1',
      rate: 0
    }, {
      title: 'Sub Title 2',
      rate: 0
    }, {
      title: 'Sub Title 3',
      rate: 0
    }];

    this.items= [{
      title: 'Title 1',
      rate: 55,
      Unit:'Piece',
      subitemlist:this.subitems
      
  }, {
      title: 'Title 2',
      rate: 90,
      Unit:'Piece',
      subitemlist:this.subitems,
  }, {
      title: 'title 3',
      rate: 85,
      Unit:'Piece',
      subitemlist:this.subitems,
  }, {
      title: 'Title 4',
      rate: 80,
      Unit:'Piece',
      subitemlist:this.subitems,
  }, {
    title: 'Title 5',
    rate: 80,
    Unit:'Piece',
    subitemlist:this.subitems,
}, {
  title: 'Title 6',
  rate: 85,
  Unit:'Piece',
  subitemlist:this.subitems,
}, {
  title: 'Title 7',
  rate: 80,
  Unit:'Piece',
  subitemlist:this.subitems,
}
, {
  title: 'Title 8',
  rate: 80,
  Unit:'Piece',
  subitemlist:this.subitems,
}
];


    return this.items;
  }
}
