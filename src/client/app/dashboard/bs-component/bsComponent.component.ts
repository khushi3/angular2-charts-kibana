import {Component,ChangeDetectionStrategy,Input} from '@angular/core';
import {PaginationInstance} from 'ng2-pagination';
import {PaginationService} from './pagination.service';


@Component({
moduleId: module.id,
selector: 'bs-component',
styleUrls: ['pagination.css'],
templateUrl: 'bscomponent.html',
changeDetection: ChangeDetectionStrategy.OnPush,
})


export class  BSComponentComponent{

	items: string[]=[];
	public maxSize:number;
	public directionLinks: boolean=true;
	public autoHide:boolean=false;
	public tableData: any[];
  

   public config: PaginationInstance = {
   	id: 'advanced',
   	itemsPerPage: 5,
   	currentPage:1

   };

    private popped:any =[];

    onPageChange(number: number){
    	console.log('change to page',number);
    	this.config.currentPage=number;

    }

    pushItem(){
    	let item= this.popped.pop() || 'No new items to show';
    	this.items.push(item);
    }

    popItem(){
    	this.popped.push(this.items.pop());
    }

	constructor(private _paginationservice: PaginationService) {

		console.log("hello");
		this._paginationservice.getData().subscribe(data => {
		this.tableData=data.elasticSearchValues;
     console.log("values"+this.tableData);

    }, error => console.log('Could not load List of Service'));

		 
	}

}
