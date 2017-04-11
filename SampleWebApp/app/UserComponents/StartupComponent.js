"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LegalEntityComponent = (function () {
    function LegalEntityComponent() {
        this.name = "GaneshPawar";
    }
    return LegalEntityComponent;
}());
LegalEntityComponent = __decorate([
    core_1.Component({
        selector: 'startup-component',
        template: " <div>\n                    <basic-details></basic-details>\n                </div>\n                <div>\n                    <dtcreditratings [title]=\"name\"></dtcreditratings>\n                </div>\n               "
    })
], LegalEntityComponent);
exports.LegalEntityComponent = LegalEntityComponent;
//@Component({
//    selector: 'root-panel',
//    template: `<div>
//                <b>From NG2</b>
//                <info-panel></info-panel>
//                </div>`,
//})
//export class StartupComponent {
//} 
//# sourceMappingURL=StartupComponent.js.map