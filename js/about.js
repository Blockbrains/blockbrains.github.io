ScrollReveal().reveal('.about h1', { reset: true });
ScrollReveal().reveal('.about h2', { reset: true });
ScrollReveal().reveal('.about p', { delay: 500, reset: true });
ScrollReveal().reveal('.aboutcolumn2', { delay: 800, reset: true });



$(window).scroll(function() {


    var $window = $(window),
        $body = $('body'),
        $panel = $('.about');

    var scroll = $window.scrollTop() + ($window.height() / 2);

    $panel.each(function() {
        var $this = $(this);

        if ($this.offset().top <= scroll && $this.offset().top + $this.height() > scroll) {
            $body.css("background-color", $this.data('color'));
        }
    });

}).scroll();

var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/pls1.json'
})