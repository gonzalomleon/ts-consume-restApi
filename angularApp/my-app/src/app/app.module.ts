import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatatableComponent } from './compo/datatable.component';
import { ColumnComponent } from './compo/column.component';
import { TableTemplate } from './compo/table-template';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    ColumnComponent,
    TableTemplate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
