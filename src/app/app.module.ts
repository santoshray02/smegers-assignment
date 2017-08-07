import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyGraphComponent } from './company-graph/company-graph.component';
import { CompanyGraphService } from './company-graph/company-graph.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyGraphComponent
  ],
  imports: [
        Ng2Charts,Ng2TableModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CompanyGraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
