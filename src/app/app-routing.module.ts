import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PostComponent } from './post/post.component';
import { GalaryComponent } from './galary/galary.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path:'view_profile',  component:UserprofileComponent},

  { path:'view_profile/posts', component:PostComponent},
  { path:'view_profile/galary', component:GalaryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
