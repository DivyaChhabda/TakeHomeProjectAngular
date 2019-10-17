

import { Injectable } from '@angular/core';
import { dataservice } from './Dataservice';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditvehicleService extends dataservice {

  constructor(http:HttpClient) { 
    debugger;
    super('http://localhost:57645/api/values/',http);
  }
}