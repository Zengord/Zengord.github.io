!function(e){"use strict";var t=e("#contact-form"),r=e(".form-messege");e(t).submit(function(s){s.preventDefault();var a=e(t).serialize();e.ajax({type:"POST",url:e(t).attr("action"),data:a}).done(function(t){e(r).removeClass("error"),e(r).addClass("success"),e(r).text(t),e("#contact-form input,#contact-form textarea").val("")}).fail(function(t){e(r).removeClass("success"),e(r).addClass("error"),""!==t.responseText?e(r).text(t.responseText):e(r).text("Oops! An error occured and your message could not be sent.")})})}(jQuery);
