"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var StartupComponent_1 = require("./UserComponents/StartupComponent");
var app_module_1 = require("./app.module");
var upgrade_adapter_1 = require("./upgrade_adapter");
var appComponent = upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(StartupComponent_1.LegalEntityComponent);
var app = angular.module('test', []).directive('legalEntity', appComponent);
app.directive('dtcreditratings', function () {
    return {
        restrict: 'E',
        template: '<a>Inside directive: {{value}}-{{title}}</a>',
        scope: { title: '=' },
        controller: function ($scope) {
            $scope.value = "Works!";
        }
    };
});
upgrade_adapter_1.upgradeAdapter.bootstrap(document.body, ['test']);
//var infoCtrl = function () {
//    this.loggedInUser = {
//        userId: 'ed',
//        userName: 'Edward',
//        group: 'Engineering'
//    }
//}
//// Angular 1 Directive
//var infoPanel = function () {
//    return {
//        restrict: 'E',
//        scope: {},
//        bindToController: {},
//        controller: infoCtrl,
//        controllerAs: 'infoCtrl',
//        template: `
//      		<div>
//      	      <span> 
//      	      {{infoCtrl.loggedInUser.userName}} ({{infoCtrl.loggedInUser.userId}}) - {{infoCtrl.loggedInUser.group}}
//      	      </span>
//      	  </div>
//        `
//    };
//};
//var myApp = angular.module("sampleApp", []);
//myApp
//    .directive('infoPanel', infoPanel)
//    .directive('rootPanel', upgradeAdapter.downgradeNg2Component(StartupComponent));
//angular.element(document).ready(function () {
//    upgradeAdapter.bootstrap(document.documentElement, ['sampleApp']);
//});
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map