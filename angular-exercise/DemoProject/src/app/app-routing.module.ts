import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesAccordianComponent } from './heroes-accordian/heroes-accordian.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SigninComponent } from "./user/signin/signin.component";
import { AuthGuard } from './auth.guard';
import { StudentListModule } from './student-list/student-list.module';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full' , canActivate: 
  [AuthGuard]},
  { path: 'login', component: SigninComponent },
  {path:'', component: ContainerComponent, children:[
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'student-list',
      loadChildren: ()=> import('./student-list/student-list.module').then(mod => mod.StudentListModule)
    },
    {
      path:'pipe',
      component:HeroesComponent
    },
    {
      path:'accordian',
      component:HeroesAccordianComponent
    }
  ]}
  // { path: 'accordian', component: HeroesAccordianComponent },
  // { path: 'pipe', component: HeroesComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'student-list', loadChildren: ()=> import('./student-list/student-list.module').then(mod => mod.StudentListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
