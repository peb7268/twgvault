webpackJsonp([4],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleAuthedRoutePageModule", function() { return SampleAuthedRoutePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample_authed_route__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SampleAuthedRoutePageModule = (function () {
    function SampleAuthedRoutePageModule() {
    }
    return SampleAuthedRoutePageModule;
}());
SampleAuthedRoutePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sample_authed_route__["a" /* SampleAuthedRoutePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sample_authed_route__["a" /* SampleAuthedRoutePage */]),
        ],
    })
], SampleAuthedRoutePageModule);

//# sourceMappingURL=sample-authed-route.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleAuthedRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SampleAuthedRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SampleAuthedRoutePage = (function () {
    function SampleAuthedRoutePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */];
        this.tabIdx = navParams.data.tabIndex || 0;
    }
    SampleAuthedRoutePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SampleAuthedRoutePage');
    };
    return SampleAuthedRoutePage;
}());
SampleAuthedRoutePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sample-authed-route',template:/*ion-inline-start:"/Users/peb7268/Desktop/dev/nodedev/twgvault/src/pages/sample-authed-route/sample-authed-route.html"*/'<!--\n  Generated template for the SampleAuthedRoutePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Dashboard</ion-title>\n      </ion-navbar>\n</ion-header>\n\n\n<ion-tabs [selectedIndex]="tabIdx">\n  <ion-tab tabIcon="search" tabTitle="Search Properties" [root]="tab1"></ion-tab>\n  <ion-tab tabIcon="contact" tabTitle="Profile" [root]="tab2"></ion-tab>\n  <ion-tab tabIcon="cog" tabTitle="Settings" [root]="tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/peb7268/Desktop/dev/nodedev/twgvault/src/pages/sample-authed-route/sample-authed-route.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SampleAuthedRoutePage);

//# sourceMappingURL=sample-authed-route.js.map

/***/ })

});
//# sourceMappingURL=4.js.map