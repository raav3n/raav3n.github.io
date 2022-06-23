anime({
    targets: '.jumbo-screen .logo',
    translateX: ['-50%', '-50%'],
    translateY: ['50%', '-50%'],
    opacity: [0,1],
    duration: 1500,
    direction: 'normal',
    easing: 'easeInOutQuad',
});

anime({
    targets: '.navbar',
    opacity: [0,1],
    duration: 2000,
    direction: 'normal',
    easing: 'easeInOutQuad',
})

let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");
let nav = document.getElementById("menuList");
let navElements = document.getElementById("menuList").children;
let container =  document.getElementById("content")
let section = document.querySelector('.section');

const handleMenu = (id) =>
{
    document.getElementById(id).style.display =  "none";

    if( document.getElementById(id) !== closeMenu ) 
    {
        closeMenu.style.display = "block";
        nav.style.visibility = "visible";
        document.body.style.overflow = 'hidden';

        anime({
            targets: navElements,
            opacity: {
                value: [0,1],
                duration: 1000,
            },
            translateY: {
                value: ['0%', '-80%'],
                duration: 700,
            },
            direction: 'normal',
            easing: 'easeInOutQuad',
        });
    }
    else 
    {
        openMenu.style.display = "block";
        nav.style.visibility = "hidden";
        document.body.style.overflow = 'visible';
    }

    //window.getComputedStyle(document.getElementById(id)).display
}

var Pwidth = 0;
window.onresize = resize;

function resize() //reset content if size is for whatever reason changed
{
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    // console.log("P: " + Pwidth + "  W: " + width);

    if ( width > 1150 && Pwidth < 1150 ) //bigger sizes
    {
        openMenu.style.display = "none";
        closeMenu.style.display = "none";
        nav.style.visibility = "visible";
        document.body.style.overflow = 'visible';

        Pwidth = width;
    }
    else if ( width < 1150  && Pwidth > 1150 ) // mobile size
    {
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
        nav.style.visibility = "hidden";
        document.body.style.overflow = 'visible';

        Pwidth = width;
    }
}

let animated = false;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          anime({
            targets: document.querySelector('.section .row ul'),
            translateX: ["200%","0%"],
            duration: 1200,
            direction: 'reversed',
            easing:'easeInOutQuad',
          });

          anime({
            targets: document.querySelector('.section .row img'),
            translateX: ["-200%","0%"],
            duration: 1200,
            direction: 'reversed',
            easing:'easeInOutQuad',
          });

          animated = true;
        }
      });
});


observer.observe(document.querySelector('.section .row'));