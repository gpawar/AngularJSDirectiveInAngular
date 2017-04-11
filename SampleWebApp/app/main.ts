import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { LegalEntityComponent } from "./UserComponents/StartupComponent"
import { AppModule } from "./app.module";
import { upgradeAdapter } from "./upgrade_adapter";



declare var angular: any;

var appComponent = upgradeAdapter.downgradeNg2Component(LegalEntityComponent);
var app = angular.module('test', []).directive('legalEntity', appComponent);

app.directive('dtcreditratings', function () {
    return {
        restrict: 'E',
        template: '<a>Inside directive: {{value}}-{{title}}</a>',
        scope: {title: '='},
        controller: function ($scope) {
            $scope.value = "Works!"
        }
    }
});

upgradeAdapter.bootstrap(document.body, ['test']); 

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

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);