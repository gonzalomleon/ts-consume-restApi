import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiReqService } from './api-req.service';
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
  constructor(private apiService: ApiReqService) {}
  itemsData: Item[];

  ngOnInit() {
    console.log('Initialize AppComponent');
    this.apiService.getItems().subscribe((res) => {
      this.itemsData = res;
      console.log(...res);
      });
  }

  agregar(){
    
    alert("Hola");
   }
}
