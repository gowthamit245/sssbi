import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent implements OnInit {
  showDivList : string = 'v_associations';
  constructor() { }

  ngOnInit() {
  }
  succStoriesBox(val){
    this.showDivList = val;
  }
}
