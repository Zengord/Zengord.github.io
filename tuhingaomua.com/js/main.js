(function($) {
    "use strict";

    /*---------------------
     tooltip
    --------------------- */
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });
    /*----------------------------
     scrollUp
    ------------------------------ */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    /*----------------------------
     mixItUp
    ------------------------------ */

    /*----------------------------
	price-slider active
   ---------------------------- */
    /*----------------------------
     wow js active
    ------------------------------ */

    /*-------------------------------------------
    option chosen
    -------------------------------------------- */


    
  
    
    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    jQuery('nav#dropdown').meanmenu();


})(jQuery);