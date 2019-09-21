var navigation        = document.querySelector(".navigation");
var sidebar           = document.querySelector(".sidebar");
var content           = document.querySelector(".content");
var sidebarToggleBtn  = document.getElementById("toggle-sidebar");
var contentContainer  = document.querySelector(".content-container");
var navRight          = document.querySelector(".navigation-right");

var navH = navigation.clientHeight || navigation.offsetHeight;

function applyMarginTop(element, value) {
  element.style.marginTop = value + "px";
}

function clearText() {
  var list = document.querySelectorAll("ul.list.list-column > li > a");
  list.forEach(function(item) {
    item.classList.toggle("d_none");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  applyMarginTop(content, navH);

  sidebarToggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("collapsed");
    navRight.classList.toggle("ml-40");
    contentContainer.classList.toggle("ml-40");
    clearText();
  });
});
