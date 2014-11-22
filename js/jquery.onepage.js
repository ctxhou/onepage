;(function($) {
    $.fn.onepage = function(options) {
        options = $.extend({
            'resize': true,
            'navLink': '.header-choice-link',
            'sectionSelector': '.page_view'
        }, options);

        if (options.resize == true) {
            $(window).resize(function(){
                header_height = $('header').outerHeight();
                $(".height_full").css("height", $(window).height()-header_height);
            });
        }

        $(options.navLink).click(function() {
            var href = $(this).attr("href");
            $(".height_full").css("display", "none");
            $(href).css("display", "block");
        });

        $(options.sectionSelector).each(function(){
            $(this).addClass('height_full');
            adjustHeight();
            hideOtherSection();
        });

        function adjustHeight() {
            var header_height = $('header').outerHeight();
            $(".height_full").css("height", $(window).height()-header_height);
        }

        function hideOtherSection() {
            // when open the page, hide the content except first section
            $(".height_full").css("display", "none");
            $(".height_full").first().css("display", "block");
        }
    };
})(jQuery);