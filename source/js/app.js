(function() {
  'use strict';
  /*FLIP CARD*/
	$('.login-button').click(function(){
	    $('body').addClass('flip');
	    $( ".login-card-wrapper" ).after( "<div class='overlay'></div>" );
	    $('.overlay').click(function(){
	      $('body').removeClass('flip');
	      $('.overlay').remove();
		});
		$('.user-pages__home').click(function(){
	      $('body').removeClass('flip');
	      $('.overlay').remove();
		});
	});

	/*OPEN MENU*/
	$(document).on('click', ".toogle-menu", function() {
		$('body').addClass('open-menu');
	});
	$(document).on('click', ".open-menu .toogle-menu", function() {
		$('body').removeClass('open-menu');
	});

	/*SCROLL PAGE UP*/
	$('.up').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	/*GOOGLE MAP*/
	google.maps.event.addDomListener(window, 'load', init);
        
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(34.7005391, 33.0941753),

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: 
            [{
			    "featureType": "landscape",
			    "stylers": [{
			        "saturation": -100
			    }, {
			        "lightness": 65
			    }, {
			        "visibility": "on"
			    }]
			}, {
			    "featureType": "poi",
			    "stylers": [{
			        "saturation": -100
			    }, {
			        "lightness": 51
			    }, {
			        "visibility": "simplified"
			    }]
			}, {
			    "featureType": "road.highway",
			    "stylers": [{
			        "saturation": -100
			    }, {
			        "visibility": "simplified"
			    }]
			}, {
			    "featureType": "road.arterial",
			    "stylers": [{
			        "saturation": -100
			    }, {
			        "lightness": 30
			    }, {
			        "visibility": "on"
			    }]
			}, {
			    "featureType": "road.local",
			    "stylers": [{
			        "saturation": -100
			    }, {
			        "lightness": 40
			    }, {
			        "visibility": "on"
			    }]
			}, {
			    "featureType": "transit",
			    "stylers": [{
			        "saturation": -100
			    }, {
			        "visibility": "simplified"
			    }]
			}, {
			    "featureType": "administrative.province",
			    "stylers": [{
			        "visibility": "off"
			    }]
			}, {
			    "featureType": "water",
			    "elementType": "labels",
			    "stylers": [{
			        "visibility": "on"
			    }, {
			        "lightness": -25
			    }, {
			        "saturation": -100
			    }]
			}, {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [{
			        "hue": "#ffff00"
			    }, {
			        "lightness": -25
			    }, {
			        "saturation": -97
			    }]
			}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(34.7005391, 33.0941753),
            map: map,
            title: 'Home!'
        });

        var map = new google.maps.Map(document.getElementById('map'), {
			mapTypeControl: false,
			draggable: false,
			scaleControl: false,
			scrollwheel: false,
			navigationControl: false,
			streetViewControl: false,
			//center: {lat: 34.7005391, lng: 33.0941753},
			fullscreenControl: true
		}); 
    }
})();
