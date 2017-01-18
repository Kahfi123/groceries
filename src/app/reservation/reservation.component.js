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
var ReservationComponent = (function () {
    function ReservationComponent(router, userService, authenticationService, alertService) {
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.days = [];
        this.stations = [];
        this.loading = false;
    }
    ReservationComponent.prototype.ngOnInit = function () {
        // get days from secure api end point
        var _this = this;
        for (var i = 1; i <= 90; i++) {
            this.days.push({ id: i, date: new Date(new Date().getTime() + (i * 24 * 60 * 60 * 1000)) });
        }
        this.userService.getStations()
            .subscribe(function (stations) {
            _this.stations = stations;
        });
    };
    ReservationComponent.prototype.tampilkanKereta = function (date, departure, arrive, slot) {
        var _this = this;
        localStorage.setItem('jumlahPenumpang', slot);
        var tanggal = date.split(" ");
        var d = new Date(date);
        var bulan = d.getMonth() + 1;
        var hari = tanggal[2];
        var tahun = d.getFullYear();
        if (arrive == departure) {
            window.alert("Stasiun Asal dan Stasiun Tujuan tidak boleh sama");
        }
        else {
            this.loading = true;
            this.authenticationService.tampilkanKereta(tahun, hari, bulan, departure, arrive, slot)
                .subscribe(function (data) {
                //this.alertService.success('Data Berh', true);
                _this.router.navigate(['daftarKereta']);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    return ReservationComponent;
}());
ReservationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'reservation.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof index_1.UserService !== "undefined" && index_1.UserService) === "function" && _b || Object, typeof (_c = typeof index_1.AuthenticationService !== "undefined" && index_1.AuthenticationService) === "function" && _c || Object, typeof (_d = typeof index_1.AlertService !== "undefined" && index_1.AlertService) === "function" && _d || Object])
], ReservationComponent);
exports.ReservationComponent = ReservationComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=reservation.component.js.map