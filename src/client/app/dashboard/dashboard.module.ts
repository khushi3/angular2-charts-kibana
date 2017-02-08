import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { BlankPageModule } from './blank-page/blankPage.module';
import { BSComponentModule } from './bs-component/bsComponent.module';
import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from '../shared/index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    	RouterModule,
    	HomeModule,
    	BSComponentModule,
        BlankPageModule
    ],

    declarations: 
    [
    DashboardComponent, 
    SidebarComponent, 
   
    ],

    exports: [DashboardComponent, SidebarComponent]
})

export class DashboardModule { }
