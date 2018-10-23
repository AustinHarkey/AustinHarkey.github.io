var scrollToDiv = document.getElementById('shopByCat');
var distanceToTop = scrollToDiv.getBoundingClientRect().top;
var hero = document.getElementById('pzHero');
var click = document.getElementById('pzHero__click');
var backTop = document.querySelector('.backToTop');
var btn = document.querySelector('.pzHero__btn');



console.log(distanceToTop);

window.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 0) {
      var poop = document.getElementById('pzHero').style.opacity = -currScrollPos2 / 1000 + 1;
      hero.style.webkitTransform = "scale(" + (-currScrollPos2 / 12000 + 1) + ")";   
    } 
    
  }
);

window.addEventListener('scroll', function() {
  var currScrollPos3 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (currScrollPos3 > 1200) {
    
    backTop.style.opacity = '1';
  } else {
    backTop.style.opacity = '0';
  }
  
}
);

// backTop.addEventListener('click', function() {
//     window.scroll({
//       top: distanceToTop,
//       behavior: "smooth"
//     })
// });

// click.addEventListener('click', function() {
//     window.scroll({
//         top: distanceToTop,
//         behavior: "smooth"
//       });
// });

$(backTop).click(function() {
  $('html, body').animate({
      scrollTop: distanceToTop
  }, 400);
});

$(click).click(function() {
  $('html, body').animate({
      scrollTop: distanceToTop
  }, 400);
});

// btn.addEventListener('click', function(e) {
//   console.log('Cliked!');
//   e.preventDefault();
//   window.scrollBy({
//     top: distanceToTop,
//     behavior: "smooth"
//   });
// });

$(btn).click(function() {
  $('html, body').animate({
      scrollTop: distanceToTop
  }, 400);
});



$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: (target.offset().top)
          }, 500);
          return false;
      }
  }
});

