import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { HelpComponent } from './help/help.component';

export const router: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'help', component: HelpComponent},
	{path: 'data', component: DataComponent}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);