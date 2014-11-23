;(function($) {
    $.fn.onepage = function(options) {
        options = $.extend({
            'resize': true,
            'navLink': '.header-choice-link',
            'sectionSelector': '.page_view',
            'sectionContent': '.page_content',
            'bkg_color': []
        }, options);

        var window_height;
        if (options.resize) {
            $(window).resize(function(){
                window_height = $(window).height();
                header_height = $('header').outerHeight();
                $(".first_height").css("height", window_height-header_height);
                $(".other_height").css("height", window_height);
                // window_width = $(window).with();
            });
        }

        // default; append class
        $(options.sectionSelector).each(function(i, v){
            // adjust each page view height
            page_content = $(this).children(options.sectionContent);
            console.log(page_content)
            if (page_content.length == 0) {
                $(this).addClass('first_height');
                $(this).css("background-color", options.bkg_color[i]);
            } else {
                $.each(page_content, function(index, el) {
                    $(this).css("background-color", options.bkg_color[i][index]);
                    current = $(this);
                    if (index == 0) {
                        current.addClass('first_height');
                    }else {
                        current.addClass('other_height');
                    }
                });
            }
            window_width = $(window).width();
            $(this).css("left", i * window_width);
        });

        $(options.navLink).click(function() {
            $(options.navLink).removeClass('selected');
            $(this).addClass('selected');
            current = $(this);
            $("#onepage-wrapper").scrollTo($(this).attr("href"), 800);
            $("#onepage-wrapper").css('height', $($(this).attr("href")).height())
            return false; //prevent the anchor link
        });

        function adjustHeight() {
            window_height = $(window).height()
            var header_height = $('header').outerHeight();
            $(".first_height").css("height", window_height-header_height);
            $(".other_height").css("height", window_height)
            $("#onepage-wrapper").css('height', $(".page_view").first().height())
        }

        function defaultSection() {
            // when open the page, hide the content except first section
            $(options.sectionSelector).first().addClass('current_page');
            var count = $(options.sectionSelector).length;
            $(options.sectionSelector).css("width", 100/count+"%");
            $("#onepage").css("width", 100*count+"%");
            $(".page_view").css("overflow", options.overflow)
        }

        // initialization
        this.each (function() {
            adjustHeight();
            defaultSection();
        })
        return this;
    };
})(jQuery);