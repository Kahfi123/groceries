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
var KonfirmasiComponent = (function () {
    function KonfirmasiComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.pembayaran = [];
        this.penumpang = new Array(JSON.parse(localStorage.getItem('jumlahPenumpang')));
        this.trains = [];
        this.setuju = false;
        this.cara_bayar = localStorage.getItem('cara_bayar');
        this.pembayaran = JSON.parse(localStorage.getItem('pembayaran'));
        var d = new Date(this.pembayaran.waktu_penagihan);
        d.setHours(d.getHours() + 2);
        this.batas_waktu_pembayaran = d;
        this.nama_kereta = localStorage.getItem('nama_kereta');
        this.id_layanan_kereta = localStorage.getItem('id_layanan_kereta');
        this.id_kereta = localStorage.getItem('id_kereta');
        this.berangkat = new Date(localStorage.getItem('berangkat'));
        this.stasiun_asal = localStorage.getItem('stasiun_asal');
        this.stasiun_tujuan = localStorage.getItem('stasiun_tujuan');
        this.datang = new Date(localStorage.getItem('datang'));
        this.jumlah_penumpang = JSON.parse(localStorage.getItem('jumlahPenumpang'));
        this.harga = localStorage.getItem('harga_tiket');
        this.total_harga = this.harga * this.jumlah_penumpang;
        this.penumpang = JSON.parse(localStorage.getItem('penumpang'));
    }
    KonfirmasiComponent.prototype.ngOnInit = function () {
    };
    KonfirmasiComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem('cara_bayar');
        localStorage.removeItem('penumpang');
        localStorage.removeItem('booking');
        localStorage.removeItem('nama_kereta');
        localStorage.removeItem('id_layanan_kereta');
        localStorage.removeItem('id_kereta');
        localStorage.removeItem('berangkat');
        localStorage.removeItem('stasiun_asal');
        localStorage.removeItem('stasiun_tujuan');
        localStorage.removeItem('datang');
        localStorage.removeItem('berangkat');
        localStorage.removeItem('jumlahPenumpang');
        localStorage.removeItem('harga_tiket');
        localStorage.removeItem('currentTrains');
        localStorage.removeItem('train');
    };
    return KonfirmasiComponent;
}());
KonfirmasiComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'konfirmasi.component.html',
        styleUrls: ['konfirmasi.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof index_1.UserService !== "undefined" && index_1.UserService) === "function" && _a || Object])
], KonfirmasiComponent);
exports.KonfirmasiComponent = KonfirmasiComponent;
var _a;
//# sourceMappingURL=konfirmasi.component.js.map