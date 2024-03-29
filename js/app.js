const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        duration: 9000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setPin(intro)
    .addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = scrollpos;
}, 33.3);


$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});