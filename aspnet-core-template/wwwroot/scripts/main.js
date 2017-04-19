///// <reference path="../typings/globals/es6-shim/index.d.ts" />
//import { Component } from "@angular/core";
//import { ROUTER_DIRECTIVES } from '@angular/router';
"use strict";
//@Component({
//    selector: "app-shell",
//    templateUrl: "/home/MainComponent",
//    directives: [ROUTER_DIRECTIVES]
//})
//export class Main {
//    title: string;
//    constructor() {
//        this.title = "World!";
//    }
//}
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map