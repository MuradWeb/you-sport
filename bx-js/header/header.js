"use strict";

$(function () {
  var $body = $('body');
  var $headerBurger = $(".js-header-burger");
  var $headerMenu = $(".js-header-menu");
  var $menuClose = $('.header__menu-close');
  $headerBurger.on("click", function () {
    var that = $(this);
    $body.css("overflow", "hidden");
    that.addClass("is-change");
    $headerMenu.addClass("is-show");
  });
  $menuClose.on('click', function () {
    var that = $(this);
    $body.css("overflow", "");
    that.removeClass("is-change");
    $headerMenu.removeClass("is-show");
  });
  $body.on("click", function (e) {
    var target = e.target;

    if (!target.closest(".js-header-menu") && !target.closest(".js-header-burger")) {
      removeHeaderMenu();
    }
  });
  $headerMenu.on("click", function (e) {
    if (!!e.target.closest("a")) {
      removeHeaderMenu();
    }
  });

  function removeHeaderMenu() {
    $headerMenu.removeClass("is-show");
    $body.removeAttr("style");
    $headerBurger.removeClass("is-change");
  }
});