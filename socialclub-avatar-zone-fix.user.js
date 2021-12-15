// ==UserScript==
// @name         Social Club Avatar Zone Fix
// @version      0.1
// @encoding     utf-8
// @description  Fixes Social Club Avatar Zone by modifying the necessary CSS.
// @author       You
// @match        *://socialclub.rockstargames.com/*
// @match        *://*.socialclub.rockstargames.com/*
// @downloadURL  https://github.com/Syping/socialclub-avatar-zone-fix/raw/master/socialclub-avatar-zone-fix.user.js
// @updateURL    https://github.com/Syping/socialclub-avatar-zone-fix/raw/master/socialclub-avatar-zone-fix.user.js
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

(function() {
    'use strict';
    addGlobalStyle("#avatarSelect img[data-type='gen8selfie'] { max-width: none !important; width: 204.6875% !important; margin-top: -14.0625% !important; margin-left: -30.7083% !important; }");
    addGlobalStyle("#selectedAvatar .confirmImage.custom.gen8selfie img { width: 261px !important; margin-top: -18px !important; margin-left: -39px !important; }");
})();
