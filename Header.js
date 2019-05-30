document.addEventListener('DOMContentLoaded', function() {
    navBarSlidingAnimation();
 }, false);

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