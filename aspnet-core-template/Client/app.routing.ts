import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent }  from './contact.component';
import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
