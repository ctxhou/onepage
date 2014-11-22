;(function($) {
    $.fn.onepage = function(options) {
        options = $.extend({
            'resize': true,

            'sectionSelector': '.page_view'
        }, options);

        // default action

        if (options.resize == true) {
            $(window).resize(function(){
                header_height = $('header').outerHeight();
                $(".height_full").css("height", $(window).height()-header_height)
            })
        }

        $(options.sectionSelector).each(function(){
            $(this).addClass('height_full');
            adjustHeight();
        });

        function adjustHeight() {
            var header_height = $('header').outerHeight();
            $(".height_full").css("height", $(window).height()-header_height)
        }
    };
})(jQuery);