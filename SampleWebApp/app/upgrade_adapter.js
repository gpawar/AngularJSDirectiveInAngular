"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upgrade_1 = require("@angular/upgrade");
var app_module_1 = require("./app.module");
var core_1 = require("@angular/core");
exports.upgradeAdapter = new upgrade_1.UpgradeAdapter(core_1.forwardRef(function () { return app_module_1.AppModule; }));
//# sourceMappingURL=upgrade_adapter.js.map