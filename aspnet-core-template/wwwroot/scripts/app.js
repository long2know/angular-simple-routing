var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("about.component", ["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, AboutComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                return AboutComponent;
            }());
            AboutComponent = __decorate([
                core_1.Component({
                    templateUrl: "/home/AboutComponent"
                })
            ], AboutComponent);
            exports_1("AboutComponent", AboutComponent);
        }
    };
});
System.register("app.component", ["@angular/core"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, AppComponent;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "World!";
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_2.Component({
                    selector: "app-shell",
                    templateUrl: "/home/MainComponent"
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_2("AppComponent", AppComponent);
        }
    };
});
System.register("contact.component", ["@angular/core"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3, ContactComponent;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            }
        ],
        execute: function () {
            ContactComponent = (function () {
                function ContactComponent() {
                }
                return ContactComponent;
            }());
            ContactComponent = __decorate([
                core_3.Component({
                    templateUrl: "/home/ContactComponent",
                })
            ], ContactComponent);
            exports_3("ContactComponent", ContactComponent);
        }
    };
});
System.register("home.component", ["@angular/core"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_4, HomeComponent;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            }
        ],
        execute: function () {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                return HomeComponent;
            }());
            HomeComponent = __decorate([
                core_4.Component({
                    templateUrl: "/home/HomeComponent"
                })
            ], HomeComponent);
            exports_4("HomeComponent", HomeComponent);
        }
    };
});
System.register("app.routing", ["@angular/router", "contact.component", "home.component", "about.component"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var router_1, contact_component_1, home_component_1, about_component_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', component: home_component_1.HomeComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'contact', component: contact_component_1.ContactComponent }
            ];
            exports_5("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//import { bootstrap }    from "@angular/platform-browser-dynamic";
//import {ROUTER_DIRECTIVES}  from "@angular/router";
System.register("app.module", ["@angular/core", "@angular/platform-browser", "@angular/forms", "app.component", "contact.component", "home.component", "about.component", "app.routing"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_5, platform_browser_1, forms_1, app_component_1, contact_component_2, home_component_2, about_component_2, app_routing_1, AppModule;
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (contact_component_2_1) {
                contact_component_2 = contact_component_2_1;
            },
            function (home_component_2_1) {
                home_component_2 = home_component_2_1;
            },
            function (about_component_2_1) {
                about_component_2 = about_component_2_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }
        ],
        execute: function () {//import { bootstrap }    from "@angular/platform-browser-dynamic";
            //import {ROUTER_DIRECTIVES}  from "@angular/router";
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_5.NgModule({
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing],
                    declarations: [app_component_1.AppComponent, about_component_2.AboutComponent, contact_component_2.ContactComponent, home_component_2.HomeComponent],
                    exports: [app_component_1.AppComponent],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_6("AppModule", AppModule);
        }
    };
});
//import { bootstrap }    from "@angular/platform-browser-dynamic";
//import {ROUTER_DIRECTIVES}  from "@angular/router";
//import {Main} from "./main";
//import { appRouterProviders } from './routes';
//bootstrap(Main, [appRouterProviders]); 
///// <reference path="../typings/globals/es6-shim/index.d.ts" />
//import { Component } from "@angular/core";
//import { ROUTER_DIRECTIVES } from '@angular/router';
System.register("main", ["@angular/platform-browser-dynamic", "app.module"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var platform_browser_dynamic_1, app_module_1, platform;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }
        ],
        execute: function () {///// <reference path="../typings/globals/es6-shim/index.d.ts" />
            //import { Component } from "@angular/core";
            //import { ROUTER_DIRECTIVES } from '@angular/router';
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(app_module_1.AppModule);
        }
    };
});
//# sourceMappingURL=app.js.map