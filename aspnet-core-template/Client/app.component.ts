/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { Component } from '@angular/core';

@Component({
    selector: "app-shell",
    templateUrl: "/home/MainComponent"
})

export class AppComponent {
    title: string;
    constructor() {
        this.title = "World!";
    }
}