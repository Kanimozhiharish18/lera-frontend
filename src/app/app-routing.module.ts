import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { DashComponent } from '../app/dash/dash.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'dash', component: DashComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
