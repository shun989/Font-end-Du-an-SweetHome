import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-action-menu-left',
  templateUrl: './action-menu-left.component.html',
  styleUrls: ['./action-menu-left.component.css']
})
export class ActionMenuLeftComponent implements OnInit {
  user: any;

  constructor() {
  }

  ngOnInit(): void {
    this.user = JSON.parse(<string>(localStorage.getItem('user')));
  }

}
