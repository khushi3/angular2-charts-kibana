import { Component ,OnInit} from '@angular/core';
import { PaginationModule } from 'ng2-bootstrap';
import { BlankPageService } from './blankPage.service'
import { ChangeDetectorRef } from '@angular/core';



@Component({
	moduleId: module.id,
    selector: 'blank-page',
    templateUrl: './blank-page.component.html',
    providers: [BlankPageService],
  
   
})

export class BlankPageComponent implements OnInit{

	public rows: Array<any>=[];
	public columns: Array<any>=[
		{title: 'Host', name:'host', filtering:{filterString:'', placeholder:'FILTER BY HOST'},sort: 'asc'},
		{title: 'Client',name:'client', filtering:{filterString:'',placeholder:'FILTER BY CLIENT'}, sort: 'asc'},
		{title: 'Method', name:'method', filtering:{filterString:'',placeholder:'FILTER BY METHOD'}, sort: 'asc'},
		{title: 'Status', name:'status', filtering:{filterString:'', placeholder:'FILTER BY STATUS'}, sort: 'asc'}
	];

	public page: number=1;
	public itemsPerPage: number=10;
	public maxSize: number=4;
	public numPages:number=1;
	public length: number=0;
	public totallength:number=0;

	public config:any={
		paging: true,
		sorting: {columns: this.columns},
		filtering: {filterString: ''},
		//itemsPerPage: this.itemsPerPage,
		className: ['table-striped','table-fixedheader']
	};

	private data: Array<any>= [];


	public constructor(private _service: BlankPageService,private ref: ChangeDetectorRef){
			
	}

	
	public ngOnInit(): void{
		
		this.onChangeTable(this.config);
	}

	
	public onChangeTable(config: any, page: any={page : this.page, itemsPerPage: this.itemsPerPage}): any{
					console.log('on change method .. itemsPerPage ' + this.itemsPerPage);
		if(config.filtering){
			Object.assign(this.config.filtering, config.filtering);
			console.log(config.filtering);
		}

		if(config.sorting){
			Object.assign(this.config.sorting, config.sorting);
			console.log(config.sorting);
		}

		 
		this._service.getData().subscribe(datum =>{
			console.log("getting data");
			this.data= datum.elasticSearchValues;
			this.length=this.data.length;
			this.totallength=this.data.length;
			

			let filteredData= this.changeFilter(this.data, this.config);
			let sortedData = this.changeSort(filteredData, this.config);
			this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
		 	this.length = sortedData.length;

   		 	this.ref.detectChanges();
		}, error => console.log('Could not load List of Service'));
	 

}


	public changeFilter(data: any, config:any ):any{
		
		let filteredData: Array<any>=data;
		let name: string;
		this.columns.forEach((column: any)=>{
			
			if(column.filtering){
				console.log('col name ' + column.name);
				
				//console.log('hello  :' + (column.filtering.filterString || ''));
				//console.log(' name' + name);
if(column.filtering.filterString!=''){
	
	console.log('hello 2 :' + column.filtering.filterString);
				filteredData= filteredData.filter((item: any)=>{
					if(item[column.name]!=undefined){
					let filteredColumn= item[column.name].toString().match(column.filtering.filterString);
				   console.log("Column value"+filteredColumn);
			
					return filteredColumn;
				}
				});

			} }
			

		});
			if(!config.filtering){
			return filteredData;

		}

		if(config.filtering.columnName){
			return filteredData.filter((item: any)=>
				item[config.filtering.columnName].match(this.config.filtering.filterString));
			
		}


		let tempArray: Array<any>=[];
		filteredData.forEach((item: any)=>{
			let flag=false;
			
			this.columns.forEach((column: any)=>{
				if(item[column.name]!=undefined){
				if(item[column.name].toString().match(this.config.filtering.filterString)){
					flag=true;
				} }

			});
			if(flag){
					tempArray.push(item);
				}

		});

		filteredData= tempArray;
		return filteredData;

		}



	public changeSort(data: any, config: any):any{
		console.log("when sorting");
		if(!config.sorting){
			return data;
			}
	let columns= this.config.sorting.columns || [];
	let columnName:string =void 0;
	let sort: string= void 0;

	for(let i=0; i<columns.length; i++ ){
		if(columns[i].sort!== '' &&  columns[i].sort !== false){
			columnName= columns[i].name;
			sort= columns[i].sort;

		}
	}

	if(!columnName){
		return data;
	}

	return data.sort((previous: any, current: any)=>{
		if(previous[columnName]> current[columnName]){
			return sort=== 'desc'? -1 : 1;
		}else if(previous[columnName]< current[columnName]){
			return sort === 'asc' ? -1 : 1;

		}

		return 0;

	});

	}

	 
	public changePage(page:any, data:Array<any> = this.data):Array<any> {
    		let start = (page.page - 1) * page.itemsPerPage;
    		let end: number= page.itemsPerPage > -1 ? (Number(start) + Number(page.itemsPerPage)) : data.length;
    		
    		return data.slice(start, end);

  		}

  		 public onCellClick(data: any): any {
    		console.log(data);
  			}


  public setItemsPerPage(num: number){
  	console.log('setting items per page to ' + num);
  	this.itemsPerPage=num;
   	this.onChangeTable(this.config);
  
	}

	
}


