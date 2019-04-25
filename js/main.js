jQuery(function($) {

	//Preloader
	var preloader=$(".preloader");$(window).load(function(){preloader.remove()});var slideHeight=$(window).height();$("#home-slider .item").css("height",slideHeight),$(window).resize(function(){$("#home-slider .item").css("height",slideHeight)}),$(window).on("scroll",function(){$(window).scrollTop()>slideHeight?$(".main-nav").addClass("navbar-fixed-top"):$(".main-nav").removeClass("navbar-fixed-top")});
	// Navigation Scroll
	$(window).scroll(function(l){Scroll()}),$(".navbar-collapse ul li a").on("click",function(){return $("html, body").animate({scrollTop:$(this.hash).offset().top-5},1e3),!1});

	// User define function
	function Scroll(){var t=[],o=[],a=$(window).scrollTop();$(".navbar-collapse").find(".scroll a").each(function(){t.push($($(this).attr("href")).offset().top),o.push($($(this).attr("href")).offset().top+$($(this).attr("href")).height())}),$.each(t,function(o){a>t[o]-200&&$(".navbar-collapse li.scroll").removeClass("active").eq(o).addClass("active")})}$("#tohash").on("click",function(){return $("html, body").animate({scrollTop:$(this.hash).offset().top-5},1e3),!1});	
	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();
	
	// Progress Bar
	$("#about-us").bind("inview",function(i,n,t,a){n&&($.each($("div.progress-bar"),function(){$(this).css("width",$(this).attr("aria-valuetransitiongoal")+"%")}),$(this).unbind("inview"))});

	//Countdown
	$("#features").bind("inview",function(i,t,n,e){t&&($(this).find(".timer").each(function(){var i=$(this);$({Counter:0}).animate({Counter:i.text()},{duration:2e3,easing:"swing",step:function(){i.text(Math.ceil(this.Counter))}})}),$(this).unbind("inview"))});

	// Portfolio Single View
	$("#portfolio").on("click",".folio-read-more",function(o){o.preventDefault();var i=$(this).data("single_url"),l="#portfolio-single-wrap".split("#")[1],t=$("#"+l).offset().top;$("html, body").animate({scrollTop:t},600),$("#portfolio-single").slideUp(500,function(){$(this).load(i,function(){$(this).slideDown(500)})})});

	// Close Portfolio Single View
	$("#portfolio-single-wrap").on("click",".close-folio-item",function(o){o.preventDefault();var l="#portfolio".split("#")[1],i=$("#"+l).offset().top;$("html, body").animate({scrollTop:i},600),$("#portfolio-single").slideUp(500)});

	// Contact form
	var form=$("#main-contact-form");form.submit(function(a){a.preventDefault();var t=$('<div class="form_status"></div>');$.ajax({url:$(this).attr("action"),beforeSend:function(){form.prepend(t.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn())}}).done(function(a){t.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3e3).fadeOut()})});

	// //Google Map
	// var latitude = $('#google-map').data('latitude')
	// var longitude = $('#google-map').data('longitude')
	// function initialize_map() {
	// 	var myLatlng = new google.maps.LatLng(latitude,longitude);
	// 	var mapOptions = {
	// 		zoom: 14,
	// 		scrollwheel: false,
	// 		center: myLatlng
	// 	};
	// 	var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
	// 	var contentString = '';
	// 	var infowindow = new google.maps.InfoWindow({
	// 		content: '<div class="map-content"><ul class="address">' + $('.address').html() + '</ul></div>'
	// 	});
	// 	var marker = new google.maps.Marker({
	// 		position: myLatlng,
	// 		map: map
	// 	});
	// 	google.maps.event.addListener(marker, 'click', function() {
	// 		infowindow.open(map,marker);
	// 	});
	// }
	// google.maps.event.addDomListener(window, 'load', initialize_map);
	
});

