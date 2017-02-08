import { Component } from '@angular/core';
import myGlobals = require('./../../global.config');


@Component({
	moduleId: module.id,
	selector: 'sidebar-cmp',
	templateUrl: 'sidebar.html'
})

export class SidebarComponent {
	showMenu: string = '';
	 private homePage: string;
	 private sidebar_application: string;
	 private sidebar_app1: string;
	 private sidebar_app2: string;

	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
	 constructor(){
    this.homePage = myGlobals.label_home;
    this.sidebar_application = myGlobals.label_application;
    this.sidebar_app1 = myGlobals.label_app1;
    this.sidebar_app2 = myGlobals.label_app2;
  }
}
