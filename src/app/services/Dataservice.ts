
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { AppError } from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import { BadInput } from '../common/bad-inputs';
import { map } from 'rxjs/operators';
import { vehicle } from '../Entities/vehicle.entity';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
export class dataservice{
    constructor(private url:string,private http:HttpClient){

    }
    getAll()
    {
        debugger;
        return this.http.get(this.url)
        .pipe(map(response=>response));
    }
    getByID(id)
    {
        debugger;
      return this.http.get(this.url +'/'+id)
      .pipe(map(response=>response));
    }
    create(data)
    {
        debugger;
        return this.http.post(this.url,data)
        .pipe(map(response=>response),catchError(this.handleerror));
    }
    update(resource)
    {
      debugger
      return this.http.put(this.url+'/'+resource.id,resource)
      .pipe(map(response=>response));;
    }
    Delete(id)
    {
     
      return this.http.delete(this.url + '/' + id)
      .pipe(map(response=>response),catchError(this.handleerror)); 
    }

    private handleerror(error:Response)
    {
      if(error.status===404)
  return Observable.throw(new NotFoundError());
      if(error.status===400)
  return Observable.throw(new BadInput(error.json()));
  return Observable.throw(new AppError(error.json()));
  
  
    }
}