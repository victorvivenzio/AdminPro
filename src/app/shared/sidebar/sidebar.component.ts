import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from '../../services/services.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(
      public sidebarService: SidebarService,
      public userService: UserService
  ) { }

  ngOnInit() {
  }

}
