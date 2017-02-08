import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import{Ng2PaginationModule} from 'ng2-pagination';

import { BSComponentComponent } from './bsComponent.component';
import {PaginationService} from './pagination.service';

@NgModule({
    imports: [BrowserModule,FormsModule,Ng2PaginationModule],
    declarations: [BSComponentComponent],
    exports: [BSComponentComponent],
     providers: [ PaginationService ]
})

export class BSComponentModule { }
