"use strict";

$(function () {
  var $jsFancy = $('.js-fancy');
  $jsFancy.on('click', function (e) {
    console.log(e);
    e.preventDefault();
    Fancybox.show([{
      src: e.currentTarget.dataset.src || e.currentTarget.getAttribute('data-src'),
      type: "inline"
    }]);
  });
});