import './main.scss';


var hamburger = document.querySelector('.hamburger');
var rightSidebar = document.querySelector('.right-sidebar');

hamburger.addEventListener("click", function(e) {

    rightSidebar.classList.toggle('is-hidden')

});