import { Injectable } from '@angular/core';
export var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getDate = function () {
        return new Date();
    };
    AppService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppService.ctorParameters = function () { return []; };
    return AppService;
}());
//# sourceMappingURL=/Users/wassimchegham/Sandbox/oss/angular-library-starter/lib/app.service.js.map