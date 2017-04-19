"use strict";
var router_1 = require("@angular/router");
var contact_component_1 = require("./contact.component");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map