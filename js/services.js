ScrollReveal().reveal('.services h1', { reset: true });
ScrollReveal().reveal('.page-content', { reset: true });


$(window).scroll(function() {

    var $window = $(window),
        $body = $('body'),
        $panel = $('.services');

    var scroll = $window.scrollTop() + ($window.height() / 1.5);

    $panel.each(function() {
        var $this = $(this);

        if ($this.offset().top <= scroll && $this.offset().top + $this.height() > scroll) {
            $body.css("background-color", $this.data('color'));
        }
    });

}).scroll();