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
var index_1 = require("../_services/index");
var HasilKodeComponent = (function () {
    function HasilKodeComponent(userService) {
        this.userService = userService;
        this.array_penumpang = [];
        this.booking = JSON.parse(localStorage.getItem('book'));
        for (var _i = 0, _a = this.booking; _i < _a.length; _i++) {
            var b = _a[_i];
            this.kode_pembayaran = b.pembayaran[0].kode_pembayaran;
            this.nama_pemesan = b.pemesan[0].nama_pemesan;
            if (b.pembayaran[0].waktu_pembayaran == null) {
                this.kode_booking = "*********";
            }
            else {
                this.kode_booking = b.kode_booking;
            }
            for (var _b = 0, _c = b.penumpang; _b < _c.length; _b++) {
                var a = _c[_b];
                this.array_penumpang.push(a);
            }
        }
        if (this.kode_booking == "*********") {
            this.info = "Anda belum menyelesaikan pembayaran, selesaikan pembayaran untuk mendapatkan Kode Booking";
        }
        else {
            this.info = "Silahkan pakai Kode Booking untuk mencetak tiketnya di stasiun";
        }
    }
    HasilKodeComponent.prototype.ngOnInit = function () {
    };
    return HasilKodeComponent;
}());
HasilKodeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'hasilKode.component.html',
        styleUrls: ['hasilKode.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof index_1.UserService !== "undefined" && index_1.UserService) === "function" && _a || Object])
], HasilKodeComponent);
exports.HasilKodeComponent = HasilKodeComponent;
var _a;
//# sourceMappingURL=hasilKode.component.js.map