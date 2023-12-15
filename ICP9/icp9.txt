window.addEventListener("load", fLoad);

// Function fLoad
function fLoad() {
    let inputLink = document.getElementById("usf");
    let div = document.getElementById("divMain");
    fHover(inputLink);
    fFadeIn(div);

}

// Function fHover
// Function is used to increase the size of the text when hovered over the anchor tag
function fHover(elt) {
    // alert("usf");
    let fontSize = window.getComputedStyle(elt).fontSize;
    elt.addEventListener("mouseover", function () {
        elt.style.fontSize = "24pt";
    });

    elt.addEventListener("mouseout", function () {
        elt.style.fontSize = fontSize;
    });
}

// Function fFadeIn
// When browser window is reloaded, paragraph tag is not visible initially and later it appears
function fFadeIn(elt) {
    // alert("divMain");
    let opValue = 0;
    elt.style.opacity = opValue;
    let timerID = window.setInterval(function () {
        opValue += 0.01;
        elt.style.opacity = opValue;

        if (opValue > 1) {
            clearInterval(timerID);
        }
    }, 20);
}