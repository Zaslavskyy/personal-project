$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    pagination: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 700,
      framesCount = 20;
      
anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

