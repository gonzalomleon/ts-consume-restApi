import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiReqService, MenuItem } from './api-req.service';
import { Item } from './item';

import { DatatableComponent } from './compo/datatable.component';
import { ColumnComponent } from './compo/column.component';
import { TableTemplate } from './compo/table-template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  menuItem: MenuItem;
  constructor(private apiService: ApiReqService) {}
  itemsData: Item[];
  nothingToShow:string = "Nothing to show";

  ngOnInit() {
    console.log('Initialize AppComponent');
    // this.apiService.getItems().subscribe((res) => {
    //   this.itemsData = res;
    //   console.log(...res);
    // });
  }

  agregar() {
    alert('Hola');
  }
  login(){
    this.nothingToShow = "Loading...";
    this.apiService.login().subscribe((res) => {
      this.menuItem = res;
    });
    this.nothingToShow = "Finished loading...";
  }
}
