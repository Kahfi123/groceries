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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.cekKodeBooking = function (kode_pembayaran) {
        return this.http.get('http://localhost:8000/booking/' + kode_pembayaran + '/')
            .map(function (response) {
            var booking = response.json();
            if (booking) {
                localStorage.setItem('book', JSON.stringify(booking));
            }
        });
    };
    AuthenticationService.prototype.konfirmasiPembayaran = function (kode_pembayaran) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var currentTime = new Date();
        return this.http.patch('http://localhost:8000/pembayaran/' + kode_pembayaran + '/', JSON.stringify({ 'kode_pembayaran': kode_pembayaran, 'waktu_pembayaran': currentTime }), options);
    };
    AuthenticationService.prototype.tampilkanKereta = function (tahun, hari, bulan, departure, arrive, slot) {
        return this.http.get('http://localhost:8000/perjalanan/' + tahun + '/' + bulan + '/' + hari + '/' + departure + '/' + arrive + '/' + slot + '/')
            .map(function (response) {
            var trains = response.json();
            if (trains) {
                localStorage.setItem('currentTrains', JSON.stringify(trains));
            }
        });
    };
    AuthenticationService.prototype.buatKodeBooking = function (jumlahPenumpang, id_layanan_kereta) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8000/booking/', JSON.stringify({ 'jumlah_penumpang': jumlahPenumpang, 'id_layanan_kereta': id_layanan_kereta }), options)
            .map(function (response) {
            var kode_booking = response.json();
            if (kode_booking) {
                localStorage.setItem('kode_booking', JSON.stringify(kode_booking));
            }
        });
    };
    AuthenticationService.prototype.buatDataPenumpang = function (penumpang) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8000/penumpang/', JSON.stringify({ 'nomor_identitas': penumpang.nomor_identitas, 'nama_penumpang': penumpang.nama_penumpang, 'kode_booking': penumpang.kode_booking }), options)
            .map(function (response) {
            var penumpang = response.json();
            var array_penumpang = JSON.parse(localStorage.getItem('penumpang')) || [];
            if (penumpang) {
                array_penumpang.push(penumpang);
                localStorage.setItem('penumpang', JSON.stringify(array_penumpang));
            }
        });
    };
    AuthenticationService.prototype.buatDataPemesan = function (pemesan) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8000/pemesan/', JSON.stringify({ 'kode_booking': pemesan.kode_booking, 'nama_pemesan': pemesan.nama_pemesan, 'email_pemesan': pemesan.email_pemesan, 'nomor_telepon_pemesan': pemesan.nomor_telepon_pemesan, 'alamat_pemesan': pemesan.alamat_pemesan }), options)
            .map(function (response) {
            var pemesan = response.json();
        });
    };
    AuthenticationService.prototype.buatDataPembayaran = function (cara_bayar, kode_booking) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8000/pembayaran/', JSON.stringify({ 'kode_booking': kode_booking, 'id_cara_bayar': cara_bayar.id_cara_bayar }), options)
            .map(function (response) {
            var pembayaran = response.json();
            if (pembayaran) {
                localStorage.setItem('pembayaran', JSON.stringify(pembayaran));
            }
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
var _a;
//# sourceMappingURL=authentication.service.js.map