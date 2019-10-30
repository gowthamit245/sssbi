import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-interface',
  templateUrl: './web-interface.component.html',
  styleUrls: ['./web-interface.component.css']
})
export class WebInterfaceComponent implements OnInit {

  showDivList : string = 'v_associations';
  constructor() { }

  ngOnInit() {
  }
  succStoriesBox(val){
    this.showDivList = val;
  }

}
