import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule }   from '@angular/material/card'
import { FlexLayoutModule, GridModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { PostComponent } from './post/post.component';
import { GalaryComponent } from './galary/galary.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserprofileComponent,
    PostComponent,
    GalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    NgScrollbarModule,
    GridModule,
    MatButtonModule,

    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
