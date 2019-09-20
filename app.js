var navigation  = document.querySelector(".navigation");
var sidebar     = document.querySelector(".sidebar");
var content     = document.querySelector(".content");

var navH = navigation.clientHeight || navigation.offsetHeight

function applyMarginTop(element, value) {
  element.style.marginTop = value + "px";
}

document.addEventListener("DOMContentLoaded", function() {
  applyMarginTop(content, navH);
});
