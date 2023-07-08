import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'', redirectTo:"index",pathMatch:"full"},
  {path:'index',component:IndexComponent},
  {path:'contact',component:ContactComponent},
  {path:'details',component:CoursesDetailsComponent},

  {path:'blog',component:BlogComponent},

  {path:'course',component:CoursesComponent},

  {path:'about',component:AboutComponent},
  {path:'admin',component:DashboardComponent},

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
