;(function($) {
    $.fn.onepage = function(options) {
        var window_width;
        options = $.extend({
            'resize': true,
            'navLink': '.header-choice-link',
            'sectionSelector': '.page_view',
            'fullHeight': true
        }, options);

        adjustHeight();
        if (options.resize) {
            $(window).resize(function(){
                header_height = $('header').outerHeight();
                $(".height_full").css("height", $(window).height()-header_height);
                window_width = $(window).with();
            });
        }
        // default; append class
        $(options.sectionSelector).each(function(i, v){
            $(this).addClass('height_full');
            window_width = $(window).width();
            $(this).css("left", i * window_width);
        });
        defaultSection();
        $(options.navLink).click(function() {
            $(options.navLink).removeClass('selected');
            $(this).addClass('selected');
            current = $(this);
            $("#onepage-wrapper").scrollTo($(this).attr("href"), 800);

            return false; //prevent the anchor link
        });

        function adjustHeight() {
            var header_height = $('header').outerHeight();
            $(".height_full").css("height", $(window).height()-header_height);
        }

        function defaultSection() {
            // when open the page, hide the content except first section
            $(options.sectionSelector).first().addClass('current_page');
            var count = $(options.sectionSelector).length;
            $(options.sectionSelector).css("width", 100/count+"%");
            $("#onepage").css("width", 100*count+"%");
            $(".page_view").css("overflow", options.overflow)
        }
    };
})(jQuery);