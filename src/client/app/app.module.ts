import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import{Ng2PaginationModule} from 'ng2-pagination';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes),
		LoginModule,
		DashboardModule,
		Ng2PaginationModule,
		SharedModule.forRoot()
	],
	declarations: [AppComponent],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	}],
	bootstrap: [AppComponent]

})

export class AppModule { }
