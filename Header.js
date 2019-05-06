window.addEventListener('scroll', function() {
    let skillsHeaderTopPos = document.getElementById("skillStart").getBoundingClientRect().top;
    let navBarBottomPos = document.getElementById("navBar").getBoundingClientRect().bottom;
    let navDiv = document.getElementsByClassName("navBarHeader").item(0);
    
    if (skillsHeaderTopPos < navBarBottomPos) {
        navDiv.style.background = "none";
        navDiv.style.backgroundColor = "#1F2121";
        let css = '.navigation a:hover {background-color: #141515; opacity: 1; }';
        if (shouldDeleteHoverEffect()) {
            deleteNewHoverEffect();
        }
        appendNewHoverEffect(css);
    } else {
        navDiv.style.backgroundImage = "url('src/img/woodcropped.png')";
        let css = '.navigation a:hover {opacity: 1; }';
        if (shouldDeleteHoverEffect()) {
            deleteNewHoverEffect();
        }
        appendNewHoverEffect(css);
    }
});

function shouldDeleteHoverEffect() {
    let lastChild = document.getElementsByTagName('head')[0].lastChild;
    return lastChild.tagName === "STYLE";
}

function appendNewHoverEffect(css) {
    let style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function deleteNewHoverEffect() {
    let head = document.getElementsByTagName('head')[0];
    head.removeChild(head.lastChild);
}