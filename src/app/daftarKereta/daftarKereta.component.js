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
var DaftarKeretaComponent = (function () {
    function DaftarKeretaComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.rangkaianPerjalanan = [];
        this.trains = [];
        this.train = [];
        this.rangkaianPerjalanan = (JSON.parse(localStorage.getItem('currentTrains')));
        this.i = 0;
        for (var _i = 0, _a = this.rangkaianPerjalanan; _i < _a.length; _i++) {
            var rangkaian = _a[_i];
            if (this.i % 2 == 0) {
                this.train.berangkat = rangkaian.waktu;
                this.train.stasiun_asal = rangkaian.id_stasiun.nama_stasiun;
            }
            else {
                this.train.datang = rangkaian.waktu;
                this.train.stasiun_tujuan = rangkaian.id_stasiun.nama_stasiun;
                this.train.id_layanan_kereta = rangkaian.id_layanan_kereta.id_layanan_kereta;
                this.train.id_kereta = rangkaian.id_layanan_kereta.id_kereta.id_kereta;
                this.train.nama_kereta = rangkaian.id_layanan_kereta.id_kereta.nama_kereta;
                this.train.kapasitas = rangkaian.id_layanan_kereta.kapasitas;
                this.train.harga = rangkaian.id_layanan_kereta.harga_tiket;
                this.trains.push(this.train);
                this.train = [];
            }
            this.i++;
        }
        this.jumlahPenumpang = JSON.parse(localStorage.getItem('jumlahPenumpang'));
    }
    DaftarKeretaComponent.prototype.ngOnInit = function () {
    };
    DaftarKeretaComponent.prototype.gotoBooking = function (train) {
        localStorage.setItem('nama_kereta', train.nama_kereta);
        localStorage.setItem('id_kereta', train.id_kereta);
        localStorage.setItem('stasiun_asal', train.stasiun_asal);
        localStorage.setItem('stasiun_tujuan', train.stasiun_tujuan);
        localStorage.setItem('berangkat', train.berangkat);
        localStorage.setItem('datang', train.datang);
        localStorage.setItem('harga_tiket', train.harga);
        localStorage.setItem('id_layanan_kereta', train.id_layanan_kereta);
        this.router.navigate(['booking']);
    };
    return DaftarKeretaComponent;
}());
DaftarKeretaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'daftarKereta.component.html',
        styleUrls: ['daftarKereta.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof index_1.UserService !== "undefined" && index_1.UserService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], DaftarKeretaComponent);
exports.DaftarKeretaComponent = DaftarKeretaComponent;
var _a, _b;
//# sourceMappingURL=daftarKereta.component.js.map