import { Component, OnInit } from '@angular/core';
import { ApiReqService } from './api-req.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  constructor(private apiService: ApiReqService) {}

  ngOnInit() {
    console.log('Initialize AppComponent');
    this.apiService.getItems().subscribe((res) => {
      console.log(...res);
    });
  }
}
