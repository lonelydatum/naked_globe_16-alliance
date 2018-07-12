(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

exports.size = size;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommon = require('../../_common/js/common');

function start() {
    var tl = new TimelineMax();
    tl.set('.frame1', { opacity: 1 });
    tl.from('.t1a', .4, { x: -_commonJsCommon.size.w }, .1);
    tl.from('.t1b', .4, { x: -_commonJsCommon.size.w }, '+=.8');
    tl.from('.t1c', .4, { x: -_commonJsCommon.size.w }, '+=1.3');

    tl.to('.frame1', .3, { opacity: 0 }, '+=1.3');

    tl.add('f2');
    tl.to('.frame2', .3, { opacity: 1 }, 'f2');

    var Icons = new TimelineMax();
    var iconTime = 20;
    Icons.from('#icon-1', iconTime, { x: -_commonJsCommon.size.w, ease: Linear.easeNone }, 0);
    Icons.to('#icon-2', iconTime, { x: -_commonJsCommon.size.w, ease: Linear.easeNone }, 0);
    Icons.from('#icon-3', iconTime, { x: -_commonJsCommon.size.w, ease: Linear.easeNone }, 0);
    Icons.to('#icon-4', iconTime, { x: -_commonJsCommon.size.w, ease: Linear.easeNone }, 0);
    Icons.from('#icon-5', iconTime, { x: -_commonJsCommon.size.w, ease: Linear.easeNone }, 0);
    Icons.to('#icon-6', iconTime, { x: -_commonJsCommon.size.w, ease: Linear.easeNone }, 0);

    // tl.add(Icons, 'f2')

    // tl.add('f2b', 'f2+=.2')

    tl.from("#t2a", .3, { opacity: 0 }, "f2+=.5");
    tl.from("#t2b", .3, { opacity: 0 }, 'f2+=1');
    tl.from("#t2c", .3, { opacity: 0 }, 'f2+=1.5');

    tl.to(".frame2", .3, { opacity: 0 }, 'f2+=5');

    tl.set('.frame3', { opacity: 1 });
    tl.from(".logo", .3, { opacity: 0 });
    tl.from(".t4", .3, { opacity: 0 }, '+=.3');
    tl.from(".cta", .3, { opacity: 0 }, '+=.3');
    // tl.gotoAndPlay('f2')
}

start();

module.exports = {};

},{"../../_common/js/common":1}]},{},[2])


//# sourceMappingURL=main.js.map
