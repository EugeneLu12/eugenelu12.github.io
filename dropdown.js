function showHideHandler(className, el) {
    let divs = document.getElementsByClassName(className);
    if (el.classList.contains("cwrotate")) {
        el.classList.remove("cwrotate")
        el.classList.add("ccwrotate")
    } else {
        el.classList.remove("ccwrotate")
        el.classList.add("cwrotate")
    }
    for (div of divs) {
        if (!div.classList.contains("line-break")) {
            if (!div.classList.contains("show")) {
                div.classList.remove("hide");
                div.classList.add("show");
            }
            else {
                div.classList.add("hide");
                div.classList.remove("show");
            }
        }
        div.style.opacity = div.style.opacity === "1" || "" ? "0" : "1";
    }
}