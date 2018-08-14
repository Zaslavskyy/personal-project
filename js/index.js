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


function initialize() {
 let myLatlng = new google.maps.LatLng(64.9331097,-18.2220583),
 mapOptions = {
 zoom: 6.55,
 center: myLatlng,
 mapTypeId: google.maps.MapTypeId.ROADMAP
 }
let map = new google.maps.Map(document.getElementById('map'), mapOptions),
contentString = 'https://www.google.com/maps/d/u/0/edit?mid=1L6R7djrZbHuCdcRCZFY6fKamCpblH6aK&ll=64.841399848427%2C-19.46810574999995&z=6',
infowindow = new google.maps.InfoWindow({
 content: contentString,
 maxWidth: 500
});

let marker = new google.maps.Marker({
 position: myLatlng,
 map: map
});

google.maps.event.addListener(marker, 'click', function() {
 infowindow.open(map,marker);
});

google.maps.event.addDomListener(window, "resize", function() {
 let center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center);
 });
}

google.maps.event.addDomListener(window, 'load', initialize);