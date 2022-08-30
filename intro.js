let introHeader = document.getElementsByClassName('intro__text')[0];
let cmd = "cat about.txt"
let aboutMeStr = "<br>Hi, I'm Eugene. I'm a software engineer with 2 years of experience. I'm a hardcore Gopher."
let index = 0;

window.onload = () => {
    printStr();
};

function displayAboutMe() {
    introHeader.innerHTML += aboutMeStr;
}

function printStr() {
    if (index == cmd.length) {
        setTimeout(displayAboutMe, 1000);
        return;
    }
    introHeader.innerHTML += cmd[index];
    index += 1;
    setTimeout(printStr, 100);
}
