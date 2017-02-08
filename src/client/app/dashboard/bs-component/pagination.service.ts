import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PaginationService{

	constructor(private http: Http){}

	getData(){
		return this.http.get('http://172.16.103.47:8080/ElasticSearchClient/elk/search/enc360')
						.map(response => response.json());

	}

}