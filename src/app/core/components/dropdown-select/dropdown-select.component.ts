import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
})
export class DropdownSelectComponent implements OnInit {
  isOpened = false;
  constructor() {
    /* TODO document why this constructor is empty */
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
}
