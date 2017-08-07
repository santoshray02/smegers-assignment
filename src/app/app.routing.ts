import { RouterModule , Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyGraphComponent } from './company-graph/company-graph.component';

const appRoutes: Routes = [
    { path : "company",
      component : CompanyListComponent,
       },
    {
    path : "companyinfo",
    component : CompanyGraphComponent,
    },
    {
    path : "companyinfo/:slug",
    component : CompanyGraphComponent,
    }
]

@NgModule({

  imports: [
    RouterModule.forRoot(
        appRoutes
    	)
  ],
  exports:[
     RouterModule
  ]
})

export class AppRoutingModule{}