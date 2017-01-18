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
var HomeComponent = (function () {
    function HomeComponent(userService, authenticationService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.cara_bayar = [];
        this.pilih_cara_bayar = false;
        this.selected_cara_bayar = [];
        this.penumpang = new Array(JSON.parse(localStorage.getItem('jumlahPenumpang')));
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.nama_kereta = localStorage.getItem('nama_kereta');
        this.id_layanan_kereta = localStorage.getItem('id_layanan_kereta');
        this.id_kereta = localStorage.getItem('id_kereta');
        this.berangkat = new Date(localStorage.getItem('berangkat'));
        this.stasiun_asal = localStorage.getItem('stasiun_asal');
        this.stasiun_tujuan = localStorage.getItem('stasiun_tujuan');
        this.datang = new Date(localStorage.getItem('datang'));
        this.jumlahPenumpang = JSON.parse(localStorage.getItem('jumlahPenumpang'));
        this.harga = localStorage.getItem('harga_tiket');
        this.total_harga = this.harga * this.jumlahPenumpang;
        this.Booking = JSON.parse(localStorage.getItem('kode_booking'));
        this.penumpang = JSON.parse(localStorage.getItem('penumpang'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#time').text(localStorage.getItem('time'));
        var res = localStorage.getItem('time').split(":");
        res[0] = parseInt(res[0]);
        res[1] = parseInt(res[1]);
        var tenMinutes = res[0] * 60 + res[1] - 1, display = document.querySelector('#time');
        this.startTimer(tenMinutes, display);
        this.userService.getCaraBayar()
            .subscribe(function (response) {
            _this.cara_bayar = response;
        });
    };
    HomeComponent.prototype.onSelectionChange = function (cara_bayar) {
        this.selected_cara_bayar = cara_bayar;
        this.pilih_cara_bayar = true;
        //localStorage.setItem('cara_bayar', cara_bayar.detil_cara_bayar);
    };
    HomeComponent.prototype.startTimer = function (duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
                window.location.href = '/reservation';
                window.alert("Waktu habis! anda akan dikembalikan ke halaman reservasi");
            }
        }, 1000);
    };
    HomeComponent.prototype.gotoFinish = function () {
        var _this = this;
        if (this.pilih_cara_bayar == false) {
            window.alert("Anda harus memilih tipe pembayaran untuk melanjutkan");
        }
        else {
            localStorage.setItem('cara_bayar', this.selected_cara_bayar.detil_cara_bayar);
            this.authenticationService.buatDataPembayaran(this.selected_cara_bayar, this.Booking.kode_booking)
                .subscribe(function (data) {
                _this.router.navigate(['konfirmasi']);
            });
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof index_1.UserService !== "undefined" && index_1.UserService) === "function" && _a || Object, typeof (_b = typeof index_1.AuthenticationService !== "undefined" && index_1.AuthenticationService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b, _c;
//# sourceMappingURL=home.component.js.map