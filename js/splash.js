const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".splash", { y: "-100%", duration: 1 }, "-=1.2");
tl.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.6");
tl.fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.8");