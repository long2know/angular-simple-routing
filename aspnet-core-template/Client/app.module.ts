//import { bootstrap }    from "@angular/platform-browser-dynamic";
//import {ROUTER_DIRECTIVES}  from "@angular/router";

//import {Main} from "./main";
//import { appRouterProviders } from './routes';

//bootstrap(Main, [appRouterProviders]);


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { ContactComponent }  from './contact.component';
import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';

import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, AboutComponent, ContactComponent, HomeComponent],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }