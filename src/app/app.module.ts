import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TotalApplicationCandidateComponent } from './dashboard/total-application-candidate/total-application-candidate.component';
import { ChartGraphComponent } from './dashboard/chart-graph/chart-graph.component';
import { TotalApplicationComponent } from './dashboard/total-application/total-application.component';
import { NewApplicantsComponent } from './dashboard/new-applicants/new-applicants.component';
import { ReferalCompaingsComponent } from './dashboard/referal-compaings/referal-compaings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    DashboardComponent,
    TotalApplicationCandidateComponent,
    ChartGraphComponent,
    TotalApplicationComponent,
    NewApplicantsComponent,
    ReferalCompaingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
