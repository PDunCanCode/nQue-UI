/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./src/Router.ts");

class Main {
    constructor() {
        this.router = new _Router__WEBPACK_IMPORTED_MODULE_0__.Router();
        console.log("Constructed new Instance of the program");
    }
    launchApp() {
        this.router.handleRequest();
    }
}
new Main().launchApp();


/***/ }),

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _controllers_LoginController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/LoginController */ "./src/controllers/LoginController.ts");
/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/MainController */ "./src/controllers/MainController.ts");


class Router {
    constructor() {
        this.mainElement = document.getElementById("main-container");
    }
    handleRequest() {
        console.log("handling request for: " + this.getRoute());
        switch (this.getRoute()) {
            case "/login":
                this.switchToLoginView();
                break;
            default:
                if (this.mainElement) {
                    const mainController = new _controllers_MainController__WEBPACK_IMPORTED_MODULE_1__.MainController(this);
                    this.mainElement.append(mainController.createView());
                }
                break;
        }
    }
    switchToLoginView() {
        if (this.mainElement) {
            this.mainElement.innerHTML = "";
            const loginController = new _controllers_LoginController__WEBPACK_IMPORTED_MODULE_0__.LoginController(this);
            this.mainElement.append(loginController.createView());
        }
    }
    getRoute() {
        return window.location.pathname;
    }
}


/***/ }),

/***/ "./src/controllers/BaseController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/BaseController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseController": () => (/* binding */ BaseController)
/* harmony export */ });
class BaseController {
    constructor(router) {
        this.container = this.createElement("div");
        this.router = router;
    }
    createElement(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    elementType, innerText, action) {
        const element = document.createElement(elementType);
        if (innerText) {
            element.innerText = innerText;
        }
        if (action) {
            element.onclick = action;
        }
        this.container.append(element);
        return element;
    }
    insertBreak() {
        this.createElement("br");
    }
}


/***/ }),

/***/ "./src/controllers/LoginController.ts":
/*!********************************************!*\
  !*** ./src/controllers/LoginController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginController": () => (/* binding */ LoginController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");

class LoginController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    createView() {
        const title = this.createElement("h2", "Please Login");
        const userName = this.createElement("label", "Username");
        const userNameInput = this.createElement("input");
        const breakElem = this.createElement("br");
        const breakElem2 = this.createElement("br");
        const password = this.createElement("label", "Password");
        password.innerText = "Password";
        const passwordInput = this.createElement("input");
        passwordInput.type = "Password";
        const loginButton = this.createElement("button", "Login");
        loginButton.innerText = "Login";
        this.container.append(title, userName, userNameInput, breakElem2, password, passwordInput, breakElem, loginButton);
        return this.container;
    }
}


/***/ }),

/***/ "./src/controllers/MainController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainController": () => (/* binding */ MainController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controllers/BaseController.ts");

class MainController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    createView() {
        const title = this.createElement("h2", "Welcome to the Main Page!");
        const article = document.createElement("div");
        article.innerText = "Filler Text goes here";
        const button = this.createElement("button", "Login", () => {
            this.router.switchToLoginView();
        });
        this.container.append(title, article, button);
        return this.container;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZ0c3VpLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vYWR2dHN1aS8uL3NyYy9Sb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vYWR2dHN1aS8uL3NyYy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9hZHZ0c3VpLy4vc3JjL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9hZHZ0c3VpLy4vc3JjL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyLnRzIiwid2VicGFjazovL2FkdnRzdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWR2dHN1aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWR2dHN1aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkdnRzdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZHZ0c3VpL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFFM0IsTUFBTSxJQUFJO0lBR2Y7UUFGUSxXQUFNLEdBQVcsSUFBSSwyQ0FBTSxFQUFFLENBQUM7UUFHcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFFRCxJQUFJLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2R5QztBQUNGO0FBRXZELE1BQU0sTUFBTTtJQUFuQjtRQUNVLGdCQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBNkJsRSxDQUFDO0lBM0JRLGFB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LCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9Sb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluIHtcclxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdGVkIG5ldyBJbnN0YW5jZSBvZiB0aGUgcHJvZ3JhbVwiKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsYXVuY2hBcHAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlci5oYW5kbGVSZXF1ZXN0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5uZXcgTWFpbigpLmxhdW5jaEFwcCgpO1xyXG4iLCJpbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9NYWluQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XHJcbiAgcHJpdmF0ZSBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVSZXF1ZXN0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGluZyByZXF1ZXN0IGZvcjogXCIgKyB0aGlzLmdldFJvdXRlKCkpO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5nZXRSb3V0ZSgpKSB7XHJcbiAgICAgIGNhc2UgXCIvbG9naW5cIjpcclxuICAgICAgICB0aGlzLnN3aXRjaFRvTG9naW5WaWV3KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaWYgKHRoaXMubWFpbkVsZW1lbnQpIHtcclxuICAgICAgICAgIGNvbnN0IG1haW5Db250cm9sbGVyOiBNYWluQ29udHJvbGxlciA9IG5ldyBNYWluQ29udHJvbGxlcih0aGlzKTtcclxuICAgICAgICAgIHRoaXMubWFpbkVsZW1lbnQuYXBwZW5kKG1haW5Db250cm9sbGVyLmNyZWF0ZVZpZXcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgc3dpdGNoVG9Mb2dpblZpZXcoKXtcclxuICAgIGlmICh0aGlzLm1haW5FbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5tYWluRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGxvZ2luQ29udHJvbGxlcjogTG9naW5Db250cm9sbGVyID0gbmV3IExvZ2luQ29udHJvbGxlcih0aGlzKTtcclxuICAgICAgICB0aGlzLm1haW5FbGVtZW50LmFwcGVuZChsb2dpbkNvbnRyb2xsZXIuY3JlYXRlVmlldygpKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0Um91dGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9Sb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgcHJvdGVjdGVkIGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUVsZW1lbnQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgZWxlbWVudFR5cGU6IEssXHJcbiAgICBpbm5lclRleHQ/OiBzdHJpbmcsXHJcbiAgICBhY3Rpb24/OiBhbnlcclxuICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xyXG4gICAgaWYgKGlubmVyVGV4dCkge1xyXG4gICAgICBlbGVtZW50LmlubmVyVGV4dCA9IGlubmVyVGV4dDtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgZWxlbWVudC5vbmNsaWNrID0gYWN0aW9uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaW5zZXJ0QnJlYWsoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9CYXNlQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcclxuICBwdWJsaWMgY3JlYXRlVmlldygpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImgyXCIsIFwiUGxlYXNlIExvZ2luXCIpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJOYW1lID0gdGhpcy5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJVc2VybmFtZVwiKTtcclxuXHJcbiAgICBjb25zdCB1c2VyTmFtZUlucHV0ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblxyXG4gICAgY29uc3QgYnJlYWtFbGVtID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcbiAgICBjb25zdCBicmVha0VsZW0yID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcblxyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBcIlBhc3N3b3JkXCIpO1xyXG4gICAgcGFzc3dvcmQuaW5uZXJUZXh0ID0gXCJQYXNzd29yZFwiO1xyXG5cclxuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHBhc3N3b3JkSW5wdXQudHlwZSA9IFwiUGFzc3dvcmRcIjtcclxuXHJcbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIkxvZ2luXCIpO1xyXG4gICAgbG9naW5CdXR0b24uaW5uZXJUZXh0ID0gXCJMb2dpblwiO1xyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgdXNlck5hbWUsXHJcbiAgICAgIHVzZXJOYW1lSW5wdXQsXHJcbiAgICAgIGJyZWFrRWxlbTIsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBwYXNzd29yZElucHV0LFxyXG4gICAgICBicmVha0VsZW0sXHJcbiAgICAgIGxvZ2luQnV0dG9uXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XHJcbiAgcHVibGljIGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcIldlbGNvbWUgdG8gdGhlIE1haW4gUGFnZSFcIik7XHJcblxyXG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhcnRpY2xlLmlubmVyVGV4dCA9IFwiRmlsbGVyIFRleHQgZ29lcyBoZXJlXCI7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiTG9naW5cIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnJvdXRlci5zd2l0Y2hUb0xvZ2luVmlldygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRpdGxlLCBhcnRpY2xlLCBidXR0b24pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9NYWluLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==