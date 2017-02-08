import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blankPage.component';
import { Ng2TableModule } from 'ng2-table';
import { PaginationModule } from 'ng2-bootstrap';

@NgModule({
    imports: [Ng2TableModule ,PaginationModule,CommonModule],
    declarations: [BlankPageComponent],
    exports: [BlankPageComponent]
})

export class BlankPageModule { }
