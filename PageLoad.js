document.addEventListener('DOMContentLoaded', function() {
    loadHoverEffect();
    navBarSlidingAnimation();
 }, false);

 function loadHoverEffect() {
    let style = document.createElement('style');
    let css = '.navigation a:hover {opacity: 1; }';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
 }

 function navBarSlidingAnimation() {
    let navBar = document.getElementsByClassName("navBarHeader").item(0);
    navBar.style.top = "-100px";
    let pos = -100;
    navBar.style.background = "none";
    navBar.style.backgroundColor = "#141515";
    let animation = setInterval(function() {
        if (pos <= 0) {
            navBar.style.top = pos + "px";
            pos++;
        } else {
            clearInterval(animation);
        }
    }, 5);
}