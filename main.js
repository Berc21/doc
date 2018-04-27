import './main.scss';



// main nav

var hamburger = document.querySelector('.hamburger');
var rightSidebar = document.querySelector('.right-sidebar');

hamburger.addEventListener("click", function(e) {

    rightSidebar.classList.toggle('is-hidden')

});

// mobile nav
var mbHamburger = document.querySelector('.mb-hamburger');
var mbContentList = document.querySelector('.mb-content-list');

mbHamburger.addEventListener("click", function(e) {

    mbContentList.classList.toggle('is-display')

});


tocbot.init({
    // Where to render the table of contents.
    tocSelector: '.js-toc',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.js-toc-content',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h1, h2, h3',
  });


  window.addEventListener("scroll",  function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 100) {
        document.querySelector(".js-toc").classList.add('is-position-fixed');
    } else {
        document.querySelector(".js-toc").classList.remove('is-position-fixed');
    }
} ) 

 // sw.js

 if ('serviceWorker' in navigator) {

    window.addEventListener('load', function() {
      navigator.serviceWorker
          .register('/sw.js', {scope: '/'})
          .then(function(registration) {
        // If registration is successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function(err) {
        //If registration is failed :(
        console.log('ServiceWorker registration failed:', err);
      });
    });
  } 