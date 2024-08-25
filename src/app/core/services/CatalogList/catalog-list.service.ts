import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CatalogListService {

  constructor(private http: HttpClient) { }

  getCatalogList(mainCategory:string ){
    console.log(environment.apiUrl + "/categories/" + mainCategory);
    return this.http.get<any>(environment.apiUrl + "/categories/" + mainCategory);
  }
}
