$(function(){
	'use strict';
	//Slider
	var $owl = $('.owl');
	$owl.each( function() {
		var $a = $(this);
		$a.owlCarousel({
			transitionStyle: $a.attr('data-transitionstyle'),
			autoPlay:  JSON.parse($a.attr('data-autoplay')),
			singleItem: JSON.parse($a.attr('data-singleItem')),
			items : $a.attr('data-items'),
			itemsDesktop : [1199,$a.attr('data-itemsDesktop')],
			itemsDesktopSmall : [979,$a.attr('data-itemsDesktopSmall')],
			itemsTablet:  [797,$a.attr('data-itemsTablet')],
			itemsMobile :  [479,$a.attr('data-itemsMobile')],
			navigation : JSON.parse($a.attr('data-buttons')),
			pagination: JSON.parse($a.attr('data-pag')),
			navigationText: ["",""]
		});
	});
	//Preloader
	$(window).load(function()
	{
		$('.preloader i').fadeOut();
		$('.preloader').delay(500).fadeOut('slow');
		$('body').delay(600).css({'overflow':'visible'});
	});
	
	//Menu
	$('.navbar-toggle').on('click',function(){
		height_w(); 
	});
	function height_w()
	{
		$('.navbar-nav').css('max-height',$(window).height()-165);
	}
	window.onresize = function()
	{
		height_w();
	}
	//cart dropdown
	$('.cart .dropdown-menu').on('click',function(e) {
		e.stopPropagation();  
	});

});