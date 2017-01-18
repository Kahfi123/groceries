"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./register/index");
var index_3 = require("./konfirmasi/index");
var index_4 = require("./kode/index");
var index_5 = require("./hasilKode/index");
var index_6 = require("./konfirmasiPembayaran/index");
var reservation_component_1 = require("./reservation/reservation.component");
var daftarKereta_component_1 = require("./daftarKereta/daftarKereta.component");
var booking_component_1 = require("./booking/booking.component");
var beranda_component_1 = require("./beranda/beranda.component");
var appRoutes = [
    { path: 'home', component: index_1.HomeComponent },
    { path: 'register', component: index_2.RegisterComponent },
    { path: 'konfirmasi', component: index_3.KonfirmasiComponent },
    { path: 'cekKodeBooking', component: index_4.KodeComponent },
    { path: 'hasilKode', component: index_5.HasilKodeComponent },
    { path: 'konfirmasiPembayaran', component: index_6.KonfirmasiPembayaranComponent },
    { path: 'reservation', component: reservation_component_1.ReservationComponent },
    { path: 'daftarKereta', component: daftarKereta_component_1.DaftarKeretaComponent },
    { path: 'booking', component: booking_component_1.BookingComponent },
    { path: 'beranda', component: beranda_component_1.BerandaComponent },
    { path: 'beranda#information', component: beranda_component_1.BerandaComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'beranda' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map