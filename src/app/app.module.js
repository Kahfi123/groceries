"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_2 = require("@angular/core");
// used to create fake backend
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_directives/index");
var index_2 = require("./_guards/index");
var index_3 = require("./_services/index");
var index_4 = require("./home/index");
var index_5 = require("./register/index");
var index_6 = require("./konfirmasi/index");
var index_7 = require("./kode/index");
var index_8 = require("./hasilKode/index");
var index_9 = require("./konfirmasiPembayaran/index");
var reservation_component_1 = require("./reservation/reservation.component");
var daftarKereta_component_1 = require("./daftarKereta/daftarKereta.component");
var booking_component_1 = require("./booking/booking.component");
var beranda_component_1 = require("./beranda/beranda.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.AlertComponent,
            index_4.HomeComponent,
            index_5.RegisterComponent,
            index_6.KonfirmasiComponent,
            index_7.KodeComponent,
            index_8.HasilKodeComponent,
            index_9.KonfirmasiPembayaranComponent,
            reservation_component_1.ReservationComponent,
            daftarKereta_component_1.DaftarKeretaComponent,
            booking_component_1.BookingComponent,
            beranda_component_1.BerandaComponent
        ],
        providers: [
            index_2.AuthGuard,
            index_3.AlertService,
            index_3.AuthenticationService,
            index_3.UserService,
            { provide: core_2.LOCALE_ID, useValue: "in-ID" },
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map