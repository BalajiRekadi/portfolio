/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/MenuItem.js":
/*!************************************!*\
  !*** ./src/components/MenuItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MenuItem extends HTMLElement {
  constructor(value) {
    super();
    this.value = value;
  }

  connectedCallback() {
    this.innerHTML = `
      <a class="menu-item" href="">${this.innerText}</a>
    `;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);


/***/ }),

/***/ "./src/components/ParaHeader.js":
/*!**************************************!*\
  !*** ./src/components/ParaHeader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ParaHeader extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <div class="dot"></div>
            ${this.innerText}
      `;
    }
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParaHeader);
  


/***/ }),

/***/ "./src/components/Paragraph.js":
/*!*************************************!*\
  !*** ./src/components/Paragraph.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Paragraph extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <p>
            ${this.innerText}
        </p>
      `;
    }
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paragraph);
  


/***/ }),

/***/ "./src/components/ProjectCard.js":
/*!***************************************!*\
  !*** ./src/components/ProjectCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ProjectCard extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const src = this.getAttribute('src');

      this.innerHTML = `
        <div class="top">
          <img src="${src}"/>
        </div>
        <div class="bottom">${this.innerText}</div>
      `;
    }
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCard);
  

/***/ }),

/***/ "./src/components/SkillCard.js":
/*!*************************************!*\
  !*** ./src/components/SkillCard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_js_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/js.svg */ "./public/js.svg");
/* harmony import */ var _public_css_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/css.svg */ "./public/css.svg");
/* harmony import */ var _public_html_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/html.svg */ "./public/html.svg");
/* harmony import */ var _public_node_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/node.svg */ "./public/node.svg");
/* harmony import */ var _public_reactjs_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/reactjs.svg */ "./public/reactjs.svg");
/* harmony import */ var _public_reactquery_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/reactquery.svg */ "./public/reactquery.svg");
/* harmony import */ var _public_redux_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/redux.svg */ "./public/redux.svg");
/* harmony import */ var _public_typescript_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/typescript.svg */ "./public/typescript.svg");
/* harmony import */ var _public_webpack_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/webpack.svg */ "./public/webpack.svg");









class SkillCard extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const name = this.getAttribute('name');
      let src = '';
      switch(name) {
        case 'javascript': src = _public_js_svg__WEBPACK_IMPORTED_MODULE_0__; break;
        case 'HTML': src = _public_html_svg__WEBPACK_IMPORTED_MODULE_2__; break;
        case 'CSS': src = _public_css_svg__WEBPACK_IMPORTED_MODULE_1__; break;
        case 'ReactJS': src = _public_reactjs_svg__WEBPACK_IMPORTED_MODULE_4__; break;
        case 'Redux': src = _public_redux_svg__WEBPACK_IMPORTED_MODULE_6__; break;
        case 'React Query': src = _public_reactquery_svg__WEBPACK_IMPORTED_MODULE_5__; break;
        case 'Typescript': src = _public_typescript_svg__WEBPACK_IMPORTED_MODULE_7__; break;
        case 'Webpack': src = _public_webpack_svg__WEBPACK_IMPORTED_MODULE_8__; break;
        case 'NodeJS': src = _public_node_svg__WEBPACK_IMPORTED_MODULE_3__; break;
        default: break;
      }
      const size = this.getAttribute('size');

      this.innerHTML = `
        <div class="top">
            <img src="${src}" width="${size}%"/>
        </div>
        <div class="bottom">${name}</div>
      `;
    }
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillCard);
  


/***/ }),

/***/ "./src/components/loader.js":
/*!**********************************!*\
  !*** ./src/components/loader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem */ "./src/components/MenuItem.js");
/* harmony import */ var _ParaHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParaHeader */ "./src/components/ParaHeader.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paragraph */ "./src/components/Paragraph.js");
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectCard */ "./src/components/ProjectCard.js");
/* harmony import */ var _SkillCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SkillCard */ "./src/components/SkillCard.js");






const loadComponents = () => {
  customElements.define('menu-item', _MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]);
  customElements.define('skill-card', _SkillCard__WEBPACK_IMPORTED_MODULE_4__["default"]);
  customElements.define('my-paragraph', _Paragraph__WEBPACK_IMPORTED_MODULE_2__["default"]);
  customElements.define('para-header', _ParaHeader__WEBPACK_IMPORTED_MODULE_1__["default"]);
  customElements.define('project-card', _ProjectCard__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadComponents);


/***/ }),

/***/ "./public/css.svg":
/*!************************!*\
  !*** ./public/css.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2c21ec0145b6d65e8eb.svg";

/***/ }),

/***/ "./public/html.svg":
/*!*************************!*\
  !*** ./public/html.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a13f5c2923d75b0ee431.svg";

/***/ }),

/***/ "./public/js.svg":
/*!***********************!*\
  !*** ./public/js.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d3f5be6c176d6b95ab6.svg";

/***/ }),

/***/ "./public/node.svg":
/*!*************************!*\
  !*** ./public/node.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06193e9f038ee3f8d16d.svg";

/***/ }),

/***/ "./public/reactjs.svg":
/*!****************************!*\
  !*** ./public/reactjs.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5afa3321a8d895d77006.svg";

/***/ }),

/***/ "./public/reactquery.svg":
/*!*******************************!*\
  !*** ./public/reactquery.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68ca66bd11e5b83f8cdb.svg";

/***/ }),

/***/ "./public/redux.svg":
/*!**************************!*\
  !*** ./public/redux.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ce7fd98f3812339fdb3.svg";

/***/ }),

/***/ "./public/typescript.svg":
/*!*******************************!*\
  !*** ./public/typescript.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f545500ef44d80b16aa7.svg";

/***/ }),

/***/ "./public/webpack.svg":
/*!****************************!*\
  !*** ./public/webpack.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd5b242ebe079e08cc1a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loader */ "./src/components/loader.js");


(0,_components_loader__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2J4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRUFBZSxVQUFVLEVBQUM7QUFDNUI7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWUsU0FBUyxFQUFDO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLElBQUk7QUFDMUI7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWUsV0FBVyxFQUFDO0FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUM7QUFDRTtBQUNFO0FBQ0E7QUFDTTtBQUNNO0FBQ1Y7QUFDVTtBQUNOO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywyQ0FBRSxFQUFFO0FBQ3JDLDJCQUEyQiw2Q0FBSSxFQUFFO0FBQ2pDLDBCQUEwQiw0Q0FBRyxFQUFFO0FBQy9CLDhCQUE4QixnREFBTyxFQUFFO0FBQ3ZDLDRCQUE0Qiw4Q0FBSyxFQUFFO0FBQ25DLGtDQUFrQyxtREFBVSxFQUFFO0FBQzlDLGlDQUFpQyxtREFBVSxFQUFFO0FBQzdDLDhCQUE4QixnREFBTyxFQUFFO0FBQ3ZDLDZCQUE2Qiw2Q0FBSSxFQUFFO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksV0FBVyxLQUFLO0FBQzVDO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFlLFNBQVMsRUFBQztBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2tDO0FBQ0k7QUFDRjtBQUNJO0FBQ0o7O0FBRXBDO0FBQ0EscUNBQXFDLGlEQUFRO0FBQzdDLHNDQUFzQyxrREFBUztBQUMvQyx3Q0FBd0Msa0RBQVM7QUFDakQsdUNBQXVDLG1EQUFVO0FBQ2pELHdDQUF3QyxvREFBVztBQUNuRDs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2xCaUQ7O0FBRWpELDhEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvUGFyYUhlYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9QYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxDYXJkLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL2xvYWRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1lbnVJdGVtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXG4gICAgICA8YSBjbGFzcz1cIm1lbnUtaXRlbVwiIGhyZWY9XCJcIj4ke3RoaXMuaW5uZXJUZXh0fTwvYT5cbiAgICBgO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtO1xuIiwiY2xhc3MgUGFyYUhlYWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuICBcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PlxuICAgICAgICAgICAgJHt0aGlzLmlubmVyVGV4dH1cbiAgICAgIGA7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQYXJhSGVhZGVyO1xuICBcbiIsImNsYXNzIFBhcmFncmFwaCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuICBcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8cD5cbiAgICAgICAgICAgICR7dGhpcy5pbm5lclRleHR9XG4gICAgICAgIDwvcD5cbiAgICAgIGA7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7XG4gIFxuIiwiY2xhc3MgUHJvamVjdENhcmQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgIH1cbiAgXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9wXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke3NyY31cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+JHt0aGlzLmlubmVyVGV4dH08L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDtcbiAgIiwiaW1wb3J0IGpzIGZyb20gJy4uLy4uL3B1YmxpYy9qcy5zdmcnO1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9wdWJsaWMvY3NzLnN2Zyc7XG5pbXBvcnQgaHRtbCBmcm9tICcuLi8uLi9wdWJsaWMvaHRtbC5zdmcnO1xuaW1wb3J0IG5vZGUgZnJvbSAnLi4vLi4vcHVibGljL25vZGUuc3ZnJztcbmltcG9ydCByZWFjdGpzIGZyb20gJy4uLy4uL3B1YmxpYy9yZWFjdGpzLnN2Zyc7XG5pbXBvcnQgcmVhY3RxdWVyeSBmcm9tICcuLi8uLi9wdWJsaWMvcmVhY3RxdWVyeS5zdmcnO1xuaW1wb3J0IHJlZHV4IGZyb20gJy4uLy4uL3B1YmxpYy9yZWR1eC5zdmcnO1xuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSAnLi4vLi4vcHVibGljL3R5cGVzY3JpcHQuc3ZnJztcbmltcG9ydCB3ZWJwYWNrIGZyb20gJy4uLy4uL3B1YmxpYy93ZWJwYWNrLnN2Zyc7XG5jbGFzcyBTa2lsbENhcmQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgIH1cbiAgXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgIGxldCBzcmMgPSAnJztcbiAgICAgIHN3aXRjaChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ2phdmFzY3JpcHQnOiBzcmMgPSBqczsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0hUTUwnOiBzcmMgPSBodG1sOyBicmVhaztcbiAgICAgICAgY2FzZSAnQ1NTJzogc3JjID0gY3NzOyBicmVhaztcbiAgICAgICAgY2FzZSAnUmVhY3RKUyc6IHNyYyA9IHJlYWN0anM7IGJyZWFrO1xuICAgICAgICBjYXNlICdSZWR1eCc6IHNyYyA9IHJlZHV4OyBicmVhaztcbiAgICAgICAgY2FzZSAnUmVhY3QgUXVlcnknOiBzcmMgPSByZWFjdHF1ZXJ5OyBicmVhaztcbiAgICAgICAgY2FzZSAnVHlwZXNjcmlwdCc6IHNyYyA9IHR5cGVzY3JpcHQ7IGJyZWFrO1xuICAgICAgICBjYXNlICdXZWJwYWNrJzogc3JjID0gd2VicGFjazsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ05vZGVKUyc6IHNyYyA9IG5vZGU7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc2l6ZScpO1xuXG4gICAgICB0aGlzLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3NyY31cIiB3aWR0aD1cIiR7c2l6ZX0lXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPiR7bmFtZX08L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBTa2lsbENhcmQ7XG4gIFxuIiwiaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nO1xuaW1wb3J0IFBhcmFIZWFkZXIgZnJvbSAnLi9QYXJhSGVhZGVyJztcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi9QYXJhZ3JhcGgnO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4vUHJvamVjdENhcmQnO1xuaW1wb3J0IFNraWxsQ2FyZCBmcm9tICcuL1NraWxsQ2FyZCc7XG5cbmNvbnN0IGxvYWRDb21wb25lbnRzID0gKCkgPT4ge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ21lbnUtaXRlbScsIE1lbnVJdGVtKTtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdza2lsbC1jYXJkJywgU2tpbGxDYXJkKTtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1wYXJhZ3JhcGgnLCBQYXJhZ3JhcGgpO1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3BhcmEtaGVhZGVyJywgUGFyYUhlYWRlcik7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncHJvamVjdC1jYXJkJywgUHJvamVjdENhcmQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbXBvbmVudHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGxvYWRDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXInO1xuXG5sb2FkQ29tcG9uZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9