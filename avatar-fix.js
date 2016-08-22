// ==UserScript==
// @name         acfun头像修复
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  修复acfun.tv下的头像显示问题（应该很快就会被ac官方修复的吧
// @author       github.com/roaringacw
// @match        http://www.acfun.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var user;
    $.ajax({
        url: "http://www.aixifan.com/usercard.aspx",
        type: "GET",
        data: {uid: $.cookie("auth_key") },
        dataType: "json",
        success: function (data) {
          if($(".user-avatar").length > 0){
             $(".user-avatar").children().prop("src",data.userjson.avatar);
          } else {
             $("#a-avatar-guide .avatar").prop("src",data.userjson.avatar);
          }
        }
    });
    

    // Your code here...
})();