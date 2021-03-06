import { Item } from './item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class MenuItem {
  id: number;
  usuario: string;
  menuitems: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiReqService {

  apiURL = 'http://localhost:3002/api';
  constructor(private httpClient: HttpClient) {}
  public getItems() {
    return this.httpClient.get<Item[]>(`${this.apiURL}/items`);
  }

  public login(): Observable<MenuItem> {
    return this.httpClient.get<MenuItem>(`${this.apiURL}/login`);
  }
}
