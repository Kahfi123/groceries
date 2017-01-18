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
var BookingComponent = (function () {
    function BookingComponent(userService, authenticationService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.currentTrain = [];
        this.trains = [];
        this.loading = false;
        this.setuju = false;
        this.nama_kereta = localStorage.getItem('nama_kereta');
        this.id_layanan_kereta = localStorage.getItem('id_layanan_kereta');
        this.id_kereta = localStorage.getItem('id_kereta');
        this.berangkat = new Date(localStorage.getItem('berangkat'));
        this.stasiun_asal = localStorage.getItem('stasiun_asal');
        this.stasiun_tujuan = localStorage.getItem('stasiun_tujuan');
        this.datang = new Date(localStorage.getItem('datang'));
        this.jumlahPenumpang = JSON.parse(localStorage.getItem('jumlahPenumpang'));
        this.harga = localStorage.getItem('harga_tiket');
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent.prototype.addProp1 = function (e) {
        if (e.target.checked) {
            this.setuju = true;
        }
        else {
            this.setuju = false;
        }
    };
    BookingComponent.prototype.goToRegister = function () {
        var _this = this;
        this.loading = true;
        if (this.setuju == false) {
            window.alert("Anda harus menyetujui persyaratan reservasi untuk melanjutkan");
        }
        else {
            this.authenticationService.buatKodeBooking(this.jumlahPenumpang, this.id_layanan_kereta)
                .subscribe(function (data) {
                _this.router.navigate(['register']);
            });
        }
    };
    return BookingComponent;
}());
BookingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'booking.component.html',
        styleUrls: ['booking.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof index_1.UserService !== "undefined" && index_1.UserService) === "function" && _a || Object, typeof (_b = typeof index_1.AuthenticationService !== "undefined" && index_1.AuthenticationService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], BookingComponent);
exports.BookingComponent = BookingComponent;
var _a, _b, _c;
//# sourceMappingURL=booking.component.js.map