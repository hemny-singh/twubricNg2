import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TwserviceService {

  constructor(private http: HttpClient) { }

  get(path: string): any {
    return this.http.get(path);
  }
}
