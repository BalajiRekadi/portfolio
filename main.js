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
class SkillCard extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const name = this.getAttribute('name');
      let src = '';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2J4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRUFBZSxVQUFVLEVBQUM7QUFDNUI7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWUsU0FBUyxFQUFDO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLElBQUk7QUFDMUI7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWUsV0FBVyxFQUFDO0FBQzdCOzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSSxXQUFXLEtBQUs7QUFDNUM7QUFDQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWUsU0FBUyxFQUFDO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCa0M7QUFDSTtBQUNGO0FBQ0k7QUFDSjs7QUFFcEM7QUFDQSxxQ0FBcUMsaURBQVE7QUFDN0Msc0NBQXNDLGtEQUFTO0FBQy9DLHdDQUF3QyxrREFBUztBQUNqRCx1Q0FBdUMsbURBQVU7QUFDakQsd0NBQXdDLG9EQUFXO0FBQ25EOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQ2Q5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlEOztBQUVqRCw4REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL01lbnVJdGVtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL1BhcmFIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL1NraWxsQ2FyZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1lbnVJdGVtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXG4gICAgICA8YSBjbGFzcz1cIm1lbnUtaXRlbVwiIGhyZWY9XCJcIj4ke3RoaXMuaW5uZXJUZXh0fTwvYT5cbiAgICBgO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtO1xuIiwiY2xhc3MgUGFyYUhlYWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuICBcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PlxuICAgICAgICAgICAgJHt0aGlzLmlubmVyVGV4dH1cbiAgICAgIGA7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQYXJhSGVhZGVyO1xuICBcbiIsImNsYXNzIFBhcmFncmFwaCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuICBcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8cD5cbiAgICAgICAgICAgICR7dGhpcy5pbm5lclRleHR9XG4gICAgICAgIDwvcD5cbiAgICAgIGA7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7XG4gIFxuIiwiY2xhc3MgUHJvamVjdENhcmQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgIH1cbiAgXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICAgIHRoaXMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9wXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke3NyY31cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+JHt0aGlzLmlubmVyVGV4dH08L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDtcbiAgIiwiY2xhc3MgU2tpbGxDYXJkIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICB9XG4gIFxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICBsZXQgc3JjID0gJyc7XG5cbiAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc2l6ZScpO1xuXG4gICAgICB0aGlzLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3NyY31cIiB3aWR0aD1cIiR7c2l6ZX0lXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPiR7bmFtZX08L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBTa2lsbENhcmQ7XG4gIFxuIiwiaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nO1xuaW1wb3J0IFBhcmFIZWFkZXIgZnJvbSAnLi9QYXJhSGVhZGVyJztcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi9QYXJhZ3JhcGgnO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4vUHJvamVjdENhcmQnO1xuaW1wb3J0IFNraWxsQ2FyZCBmcm9tICcuL1NraWxsQ2FyZCc7XG5cbmNvbnN0IGxvYWRDb21wb25lbnRzID0gKCkgPT4ge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ21lbnUtaXRlbScsIE1lbnVJdGVtKTtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdza2lsbC1jYXJkJywgU2tpbGxDYXJkKTtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1wYXJhZ3JhcGgnLCBQYXJhZ3JhcGgpO1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3BhcmEtaGVhZGVyJywgUGFyYUhlYWRlcik7XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncHJvamVjdC1jYXJkJywgUHJvamVjdENhcmQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbXBvbmVudHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyJztcblxubG9hZENvbXBvbmVudHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==