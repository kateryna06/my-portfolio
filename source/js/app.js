$(document).ready(function () {
	flipCard();
	openMenu();
	scrollUp();
	scrollDown();
	blogSidebar();
	googleMap();

})

function flipCard(){
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
}
function openMenu() {
	$(document).on('click', ".toogle-menu", function() {
		$('body').addClass('open-menu');
	});
	$(document).on('click', ".open-menu .toogle-menu", function() {
		$('body').removeClass('open-menu');
	});
}
function scrollUp(){
	$('.up').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
}
function scrollDown(){
	$('.header-btn a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});
}
function blogSidebar(){
	$(document).on("scroll", onScroll);
    //smoothscroll
    $('.blog-sidebar a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
	        $target = $(target);
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top+2
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
    });
}
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.blog-sidebar li').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.blog-sidebar li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
       }
    });
}





function googleMap() {
	// body...

  'use strict';
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

}

$(window).scroll(function() {
	parallaxBG();
	scrollSidebar();

});
function parallaxBG(){
	var wScroll = $(window).scrollTop();
	var
		bg = $('.parallax-bg'),
		user = $('.login-block-holder');

	slideIt(bg, wScroll / 45);
	slideIt(user, wScroll / 15);

	function slideIt(block, strafeAmount) {
		var strafe = -strafeAmount + '%',
			transormString = 'translate3d(0,' + strafe + ',0)';

		block.css({
			'transform' : transormString
		});
	}
}
function scrollSidebar() {
	if ($('.blog-sidebar').length) {
		var
			wScroll = $(window).scrollTop(),
			menu = $('.static .post-list'),
			sidebar = $('.static .blog-menu__wrapper '),
			stickyStart = sidebar.offset().top,
			menuClone = sidebar.clone(),
			fixedSidebar = $('.fixed .blog-sidebar');

		if (wScroll >= stickyStart) {

			if (!fixedSidebar.find('.blog-menu__wrapper').length) {
				fixedSidebar.append(menuClone);
				menu.hide();
			}
		} else {
			fixedSidebar.find('.blog-menu__wrapper').remove();
			menu.show();
		}
	}
}