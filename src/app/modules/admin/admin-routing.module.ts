import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'',component:AdmindashboardComponent,
      children:[
        {path:'home',component:HomeComponent},
        {path:'about',component:AboutComponent},
        {path:'',redirectTo:'./admin/home',pathMatch:'full'},
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
