import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phar-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
