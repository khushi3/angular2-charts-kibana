import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import myGlobals = require('../../global.config');

@Injectable()
export class TrafficChartService {
  private actionUrl: string;

  constructor( private http:Http) {

    this.actionUrl = myGlobals.ServerWithApiUrlStatus;
    this.http = http;
  }


  getData() {
  return this.http.get(this.actionUrl)
                    .map(response => response.json());

  }
}
