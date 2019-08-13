let shouldAnimate = true;

document.addEventListener('scroll', function() {
    let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let navbar = document.getElementsByClassName('navbar').item(0);
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : 
        (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (scrollTop > windowHeight) {
            if (shouldAnimate) {
                shouldAnimate = false;
                navbarSlidingAnimation(navbar);
            }
        } else {
            navbar.style.background ='none';
            shouldAnimate = true;
        }
 }, false);

 function scrollToElement(element) {
    document.getElementsByClassName(element).item(0).scrollIntoView(true);
}

function navbarSlidingAnimation(navbar) {
    shouldAnimate = false;
    navbar.style.top = '-100px';
    let pos = -100;
    navbar.style.backgroundColor = '#1f2631';
    let animation = setInterval(function() {
        if (pos <= 0) {
            navbar.style.top = pos + 'px';
            pos++;
        } else {
            clearInterval(animation);
        }
    }, 5);
}