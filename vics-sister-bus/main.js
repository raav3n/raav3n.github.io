let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");
let nav = document.getElementById("menuList");

handleMenu = (id) =>
{
    document.getElementById(id).style.display =  "none";

    if( document.getElementById(id) !== closeMenu ) 
    {
        closeMenu.style.display = "block";
        nav.style.visibility = "visible";
    }
    else 
    {
        openMenu.style.display = "block";
        nav.style.visibility = "hidden";
    }

    //window.getComputedStyle(document.getElementById(id)).display
}

var Pwidth = 0;
window.onresize = resize;

function resize()
{
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    console.log("P: " + Pwidth + "  W: " + width);

    if ( width > 700 && Pwidth < 700 )
    {
        openMenu.style.display = "none";
        closeMenu.style.display = "none";
        nav.style.visibility = "visible";

        Pwidth = width;
    }
    else if ( width < 700  && Pwidth > 700 )
    {
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
        nav.style.visibility = "hidden";

        Pwidth = width;
    }
}