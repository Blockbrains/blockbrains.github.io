const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const skip = document.querySelector(".skip");
const gototop = document.querySelector(".go-to-top");

skip.disabled = false;
let verifopacity = true;
let verifopacity1 = true;

let verifskip = true;
let verifskip1 = true;

let verifgotop = true;
let verifgotop1 = true;

const tl2 = gsap.timeline({ defaults: { ease: "power1.out" } });

window.onscroll = () => {
    if (this.scrollY > 9000) {
        navbar.classList.add("sticky");
    } else if (this.scrollY <= 9000) {
        navbar.classList.remove("sticky");
    }

    if ((this.scrollY > 1400) && (verifopacity == true)) {
        tl2.to('.s-intro__scroll', { opacity: 0, duration: 0.5 })
        verifopacity = false;
        verifopacity1 = true;
    } else if ((this.scrollY < 1400) && (verifopacity1 == true)) {
        tl2.to('.s-intro__scroll', { opacity: 1, duration: 0.5 })
        verifopacity1 = false;
        verifopacity = true;
    }

    if ((this.scrollY > 3500) && (verifskip == true)) {
        tl2.to('.skip', { opacity: 1, duration: 0.5 })
        skip.style.pointerEvents = 'auto';
        verifskip = false;
        verifskip1 = true;
    } else if ((this.scrollY < 3500) && (verifskip1 == true)) {
        tl2.to('.skip', { opacity: 0, duration: 0.5 })
        skip.style.pointerEvents = 'none';
        verifskip1 = false;
        verifskip = true;
    }

    if ((this.scrollY > 9700) && (verifgotop == true)) {
        tl2.to('.go-to-top', { opacity: 1, duration: 0.5 })
        gototop.style.pointerEvents = 'auto';
        verifgotop = false;
        verifgotop1 = true;
    } else if ((this.scrollY < 9700) && (verifgotop1 == true)) {
        tl2.to('.go-to-top', { opacity: 0, duration: 0.5 })
        gototop.style.pointerEvents = 'none';
        verifgotop1 = false;
        verifgotop = true;
    }
}



$("a[id='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

const menuBtnn = document.querySelector('.menu-btnn');
let menuOpen = false;
menuBtnn.addEventListener('click', () => {
    if (!menuOpen) {
        //open
        menu.classList.add("active");
        menuBtn.classList.add("hide");
        cancelBtn.classList.add("show");
        body.classList.add("disabledScroll");
        menuBtnn.classList.add('open');
        menuOpen = true;
    } else {
        //close
        menuBtnn.classList.remove('open');
        menuOpen = false;
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        body.classList.remove("disabledScroll");
    }
});


function closemenu() {
    console.log("test");
    if (menuOpen) {
        //close
        menuBtnn.classList.remove('open');
        menuOpen = false;
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        body.classList.remove("disabledScroll");
    }
}