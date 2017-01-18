"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var KodeComponent = (function () {
    function KodeComponent(router, authenticationService, alertService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    KodeComponent.prototype.cekKodeBooking = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.cekKodeBooking(this.model.kodePembayaran)
            .subscribe(function (data) {
            _this.alertService.success('Kode Booking ditemukan', true);
            _this.router.navigate(['hasilKode']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return KodeComponent;
}());
KodeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'kode.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof index_1.AuthenticationService !== "undefined" && index_1.AuthenticationService) === "function" && _b || Object, typeof (_c = typeof index_1.AlertService !== "undefined" && index_1.AlertService) === "function" && _c || Object])
], KodeComponent);
exports.KodeComponent = KodeComponent;
var _a, _b, _c;
//# sourceMappingURL=kode.component.js.map