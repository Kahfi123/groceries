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
var RegisterComponent = (function () {
    function RegisterComponent(router, userService, authenticationService, alertService) {
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.pemesan = [];
        this.loading = false;
        this.nama_penumpang = [];
        this.nomor_identitas = [];
        this.jumlahInputPenumpang = new Array(JSON.parse(localStorage.getItem('jumlahPenumpang')));
        this.penumpang = new Array(JSON.parse(localStorage.getItem('jumlahPenumpang')));
        this.pen = [];
        this.jumlahPenumpang = JSON.parse(localStorage.getItem('jumlahPenumpang'));
        this.Booking = JSON.parse(localStorage.getItem('kode_booking'));
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var tenMinutes = 60 * 10, display = document.querySelector('#time');
        this.startTimer(tenMinutes, display);
    };
    RegisterComponent.prototype.createRange = function (number) {
        this.items = [];
        for (var i = 1; i <= number; i++) {
            this.items.push(i);
        }
        return this.items;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        //console.log(this.model);
        localStorage.setItem('time', $('#time').text());
        this.loading = true;
        this.pemesan.kode_booking = this.Booking.kode_booking;
        for (var i = 0; i < this.nama_penumpang.length; i++) {
            this.pen = [];
            this.pen.nama_penumpang = this.nama_penumpang[i];
            this.pen.nomor_identitas = this.nomor_identitas[i];
            this.pen.kode_booking = this.Booking.kode_booking;
            this.authenticationService.buatDataPenumpang(this.pen)
                .subscribe(function (data) {
                if (i == _this.jumlahPenumpang) {
                    _this.authenticationService.buatDataPemesan(_this.pemesan)
                        .subscribe(function (data) {
                        _this.router.navigate(['home']);
                    });
                }
            });
        }
        /*for(var i = 0 ; i < this.penumpang.length; i++)
        {

        }*/
    };
    RegisterComponent.prototype.startTimer = function (duration, display) {
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
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'register.component.html',
        styleUrls: ['register.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof index_1.UserService !== "undefined" && index_1.UserService) === "function" && _b || Object, typeof (_c = typeof index_1.AuthenticationService !== "undefined" && index_1.AuthenticationService) === "function" && _c || Object, typeof (_d = typeof index_1.AlertService !== "undefined" && index_1.AlertService) === "function" && _d || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map