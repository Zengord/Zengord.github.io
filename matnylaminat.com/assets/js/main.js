(function ($) {
    "use strict";
    


    /*---------------------
        Select2 active
    --------------------- */
   
    $(window).on('resize', function(){
        $('.select-active').select2()
    });
    
    /*====== SidebarCart ======*/
    function miniCart() {
        var navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper = $('.main-wrapper');
        
        wrapper.prepend('<div class="body-overlay"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    };
    miniCart();
    
    /*====== Video active ======*/
    $('.video-banner').on('click', '.status', function(e) {
        e.preventDefault();
        var $el = $(this),
            $banner = $el.closest('.video-banner'),
            video = $el.closest('.video-banner').find('video')[0];
        if (video.paused) {
            $banner.addClass('playing');
            video.play();
        } else {
            $banner.removeClass('playing');
            video.pause();
        }
    });
    
    
  

    
    /*-------------------------
        Smooth Scroll
    --------------------------*/
    $('.scroll-down a').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            offset: 0,
            scrollTarget: link.hash
        });
    });
    
    /*--------------------------------
        Mouse Parallax
    -----------------------------------*/
    var scene = $('#scene');
    if(scene.length > 0) {
        var parallaxInstance = new Parallax(scene.get(0), {
            relativeInput: true,
        });
    }
    
 
    
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.product-quality');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    /*------------------------------------
		Product details big img slider
    -----------------------------------*/
    $('#exampleModal').on('shown.bs.modal', function () {
        var productDetailsBig = new Swiper('.product-details-big-img-slider', {
            autoplay: false,
            delay: 5000,
            slidesPerView: 1,
            loop: false,
            navigation: {
                nextEl: '.product-details-next',
                prevEl: '.product-details-prev',
            },
        }); 
    })
    
    /*--------------------------------------
		Product details small img slider
    ---------------------------------------*/
    
 
    
    /*--------------------------------------
		Product details big img slider 2
    ---------------------------------------*/
    
    // Instantiate EasyZoom instances
    
    /*-----------------
        Menu sticky
    -----------------*/
    var header = $('.sticky-bar');
    var $window = $(window);
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
    /*---------------------
        Price range
    --------------------- */
   
    

    
    /*--------------------------
        Isotope active 1
    ---------------------------- */
    

    
    /*--------------------------
        Isotope active 2
    ---------------------------- */

    
    /*--------------------------
        Isotope active 3
    ---------------------------- */
   
    $('.isotope-menu-active button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    
    /*---------------------
        Video popup
    --------------------- */
  
    
    /*---------------------------
		Blog img slider
    ----------------------------*/
  
    
    /*-----------------------------
		Portfolio details slider
    -------------------------------*/
 
    
    /*------------------------
       Coupon code active
    -------------------------*/
    function cartCoupon() {
        var trigger = $('.coupon-active'),
            container = $('.calculate-discount-dropdown');
        trigger.on('click', function(e) {
            e.preventDefault();
            container.toggleClass('active');
        })
    }
    cartCoupon();
    
    /*------------------------
       Coupon code active two
    -------------------------*/
    function cartCouponTwo() {
        var trigger = $('.coupon-active-2'),
            container = $('.calculate-discount-dropdown-2');
        trigger.on('click', function(e) {
            e.preventDefault();
            container.toggleClass('active');
        })
    }
    cartCouponTwo();
    
    /*--- Checkout toggle function ----*/
    $('.checkout-click1').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });
    
    
    /*--- Checkout toggle function ----*/
    $('.checkout-click3').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });
    
    /*-------------------------
        Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });
    
    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });
    
    /*-------------------------------------
        Checkout one click toggle function
    ---------------------------------------*/
    var checked = $( '.sin-payment input:checked' )
    if(checked){
        $(checked).siblings( '.payment-box' ).slideDown(900);
    };
	 $( '.sin-payment input' ).on('change', function() {
        $( '.payment-box' ).slideUp(900);
        $(this).siblings( '.payment-box' ).slideToggle(900);
    });
    

    

    
    /*====== clickable mainmenu active ======*/
    function clickableMainMenu() {
        var menuTrigger = $('.clickable-mainmenu-active'),
            endTrigger = $('button.clickable-mainmenu-close'),
            container = $('.clickable-mainmenu');
        
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
        });
    };
    clickableMainMenu();
    
    /*====== Mobile menu active ======*/
    function mobileMainMenu() {
        var navbarTrigger = $('.mobile-menu-active-button'),
            endTrigger = $('.off-canvas-close'),
            container = $('.off-canvas-active'),
            wrapper = $('.main-wrapper-2');
        
        wrapper.prepend('<div class="body-overlay-2"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active-2');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active-2');
        });
        
        $('.body-overlay-2').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active-2');
        });
    };
    mobileMainMenu();
    
    
    /*------------------------------
        Mobile menu dropdown active
    -------------------------------- */
    var $offCanvasNav = $('.category-menu-dropdown'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    
    
    
    
    
    
    
    
    
})(jQuery);

