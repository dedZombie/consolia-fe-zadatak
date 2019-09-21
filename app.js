var navigation        = document.querySelector(".navigation");
var leftSidebar       = document.getElementById("left-sidebar-menu");
var content           = document.querySelector(".content");
var sidebarToggleBtn  = document.getElementById("toggle-sidebar");
var contentContainer  = document.querySelector(".content-container");
var navRight          = document.querySelector(".navigation-right");
var rightSidebar      = document.getElementById("right-sidebar-menu");
var formToggleBtn     = document.getElementById("toggle-form");

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

$(document).ready(function() {
  console.log("ready");
  applyMarginTop(content, navH);
  applyMarginTop(rightSidebar, navH + 3);

  sidebarToggleBtn.addEventListener("click", function() {
    sidebarToggleBtn.children[0].classList.toggle("fa-list");
    leftSidebar.classList.toggle("collapsed");
    navRight.classList.toggle("ml-50");
    contentContainer.classList.toggle("ml-50");
    clearText();
  });

  formToggleBtn.addEventListener("click", function(){
    formToggleBtn.children[0].classList.toggle("fa-times");
    rightSidebar.classList.toggle("visible");
  });
});
