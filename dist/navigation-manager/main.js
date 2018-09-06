(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-grid></app-grid>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var data_service_1 = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
var tile_component_1 = __webpack_require__(/*! ./components/tile/tile.component */ "./src/app/components/tile/tile.component.ts");
var grid_component_1 = __webpack_require__(/*! ./components/grid/grid.component */ "./src/app/components/grid/grid.component.ts");
var header_component_1 = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
var footer_component_1 = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
var material_1 = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                tile_component_1.TileComponent,
                grid_component_1.GridComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatSliderModule,
                http_1.HttpClientModule
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n  height: 9vh;\r\n  /*width: 100%;*/\r\n\r\n}\r\n\r\n.btn-primary{\r\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffb76b+0,ffa73d+23,ff7c00+80,ff7f04+100 */\r\n  background: #ffb76b; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom, #ffb76b 0%,#ffa73d 23%,#ff7c00 80%,#ff7f04 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffb76b', endColorstr='#ff7f04',GradientType=0 ); /* IE6-9 */\r\n  border-right: solid 1px white;\r\n  border-left: none;\r\n  border-top: none;\r\n  border-bottom: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'footer': true}\">\r\n  <!--<ul class=\"nav nav-pills\" style=\"height: 100%\">-->\r\n    <!--<li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>-->\r\n    <!--<li role=\"presentation\"><a href=\"#\">Profile</a></li>-->\r\n    <!--<li role=\"presentation\"><a href=\"#\">Messages</a></li>-->\r\n  <!--</ul>-->\r\n      <div class=\"col-md-4\" style=\" height: 100%; padding: 0\">\r\n        <button class=\"btn btn-primary\" style=\"width: 100%; height: 100%; border-radius: 0\" ><span class=\"glyphicon glyphicon-tasks\" aria-hidden=\"true\" style=\"font-size: 40px\"></span></button>\r\n      </div>\r\n      <div class=\"col-md-4\" style=\"height: 100%; padding: 0\">\r\n        <button class=\"btn btn-primary\" style=\"width: 100%; height: 100%; border-radius: 0\" (click)=\"print()\">Click</button>\r\n      </div>\r\n      <div class=\"col-md-4\" style=\" height: 100%; padding: 0 \">\r\n        <button class=\"btn btn-primary\" style=\"width: 100%; height: 100%; border-radius: 0\">Click</button>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var data_service_1 = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(dataService) {
        this.dataService = dataService;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.print = function () {
        console.log(JSON.stringify(this.dataService.grid));
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/components/grid/grid.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-bg\">\r\n  <img src=\"/assets/map-dave.png\" #image />\r\n\r\n  <table [ngStyle]=\"img && {height: height + 'px', width:width + 'px'}\">\r\n    <tr *ngFor=\"let row of dataService.grid; let i = index\">\r\n      <td *ngFor=\"let col of row ; let j = index\" (mouseenter)=\"paintBoundries(i,j)\">\r\n        <app-tile [col]=\"col\"></app-tile>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n\r\n\r\n\r\n<!--<div class=\"grid-bg\">-->\r\n<!--</div>-->"

/***/ }),

/***/ "./src/app/components/grid/grid.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n  :host .grid-bg {\n    position: relative;\n    display: block;\n    height: 82vh;\n    text-overflow: ellipsis; }\n  :host .grid-bg img {\n      display: block;\n      max-height: 100%; }\n  :host .grid-bg table {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0; }\n  :host .grid-bg table tbody {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%; }\n  :host .grid-bg table tbody tr {\n          display: flex;\n          flex: 1;\n          border-bottom: 1px solid gray; }\n  :host .grid-bg table tbody tr td {\n            flex: 1;\n            border-left: 1px solid gray; }\n"

/***/ }),

/***/ "./src/app/components/grid/grid.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var data_service_1 = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var core_2 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var GridComponent = /** @class */ (function () {
    function GridComponent(dataService) {
        this.dataService = dataService;
        this.ctrlPressed = false;
        this.isShiftKeyPressed = false;
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.img = _this.image.nativeElement;
            _this.height = _this.img.clientHeight;
            _this.width = _this.img.clientWidth;
        }, 500);
    };
    GridComponent.prototype.paintBoundries = function (i, j) {
        if (this.ctrlPressed) {
            this.dataService.grid[i][j] = 2;
        }
        if (this.isShiftKeyPressed) {
            this.dataService.grid[i][j] = 1;
        }
    };
    GridComponent.prototype.handleKeyDown = function (e) {
        if (e.ctrlKey) {
            this.ctrlPressed = true;
        }
        if (e.shiftKey) {
            this.isShiftKeyPressed = true;
        }
    };
    GridComponent.prototype.handleKeyUp = function (e) {
        if (!e.ctrlKey) {
            this.ctrlPressed = false;
        }
        if (!e.shiftKey) {
            this.isShiftKeyPressed = false;
        }
    };
    __decorate([
        core_1.ViewChild('image'),
        __metadata("design:type", core_2.ElementRef)
    ], GridComponent.prototype, "image", void 0);
    GridComponent = __decorate([
        core_1.Component({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/components/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/components/grid/grid.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '(document:keydown)': 'handleKeyDown($event)',
                '(document:keyup)': 'handleKeyUp($event)'
            }
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;


/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n  height: 9vh;\r\n  /*width: 100%;*/\r\n  border: solid 1px;\r\n  text-align: center;\r\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffb76b+0,ffa73d+23,ff7c00+80,ff7f04+100 */\r\n  background: #ffb76b; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom, #ffb76b 0%,#ffa73d 23%,#ff7c00 80%,#ff7f04 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffb76b', endColorstr='#ff7f04',GradientType=0 ); /* IE6-9 */\r\n}\r\n\r\nmat-slider {\r\n  width: 300px;\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h4>Scale Row</h4>\r\n            <mat-slider\r\n                    [(ngModel)]=\"dataService.numOfRows\"\r\n                    thumbLabel\r\n                    tickInterval=\"1000\"\r\n                    min=\"1\"\r\n                    max=\"100\"></mat-slider>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <h4>Scale Col</h4>\r\n            <mat-slider\r\n                    [(ngModel)]=\"dataService.numOfCols\"\r\n                    thumbLabel\r\n                    tickInterval=\"1000\"\r\n                    min=\"1\"\r\n                    max=\"100\"></mat-slider>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var data_service_1 = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataService) {
        this.dataService = dataService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.sliderChanged = function () {
        this.dataService.initArray();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/components/tile/tile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/tile/tile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tile\" [class.tile-block]=\"col === 2\" [ngStyle]=\"tileStyle\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/tile/tile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/tile/tile.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile {\n  /*width: calc(100vw / 30.5);*/\n  /*height: calc(62vh / 30);*/\n  display: block;\n  width: 100%;\n  height: 100%;\n  display: block;\n  border: solid;\n  border-width: 0.01em;\n  border-color: rgba(138, 138, 138, 0.6);\n  position: relative; }\n  .tile.tile-block {\n    background-color: rgba(255, 0, 0, 0.6); }\n"

/***/ }),

/***/ "./src/app/components/tile/tile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tile/tile.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var data_service_1 = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var TileComponent = /** @class */ (function () {
    function TileComponent(dataService) {
        this.dataService = dataService;
    }
    TileComponent.prototype.ngOnInit = function () {
        // this.tileStyle = {
        // //   'height': 'calc(82vh / ' + this.dataService.numOfRows + ')',
        // //   'width' : 'calc(100vw / ' + this.dataService.numOfCols + ')',
        //   'background': this.col === 2 ? '#ff000961' : ''
        // };
        // this.tileStyle = {
        //   "width":
        // }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TileComponent.prototype, "col", void 0);
    TileComponent = __decorate([
        core_1.Component({
            selector: 'app-tile',
            template: __webpack_require__(/*! ./tile.component.html */ "./src/app/components/tile/tile.component.html"),
            styles: [__webpack_require__(/*! ./tile.component.scss */ "./src/app/components/tile/tile.component.scss")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], TileComponent);
    return TileComponent;
}());
exports.TileComponent = TileComponent;


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.configUrl = "http://localhost/QFlowHackaton/qgo_api/Main/GetData";
        this._numOfRows = 30;
        this._numOfCols = 30;
        this.initArray();
    }
    Object.defineProperty(DataService.prototype, "numOfCols", {
        get: function () {
            return this._numOfCols;
        },
        set: function (value) {
            this._numOfCols = value;
            this.initArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "numOfRows", {
        get: function () {
            return this._numOfRows;
        },
        set: function (value) {
            this._numOfRows = value;
            this.initArray();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.initArray = function () {
        this.http.get(this.configUrl).subscribe(function (data) {
            return function () {
                debugger;
                var d = data;
            };
        });
        console.log(this._numOfRows);
        this.grid = [];
        for (var i = 0; i < this._numOfRows; i++) {
            this.grid[i] = [];
            for (var j = 0; j < this._numOfCols; j++) {
                this.grid[i][j] = 1;
            }
        }
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
__webpack_require__(/*! hammerjs */ "../../node_modules/hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace-Sep\QNavigation\projects\navigation-manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map