let expanded = false;

function Expand() {
    let header = document.getElementsByTagName('header')[0];
    let div = document.getElementById('navCollapse');

    if (expanded) {
        header.style.marginBottom = "0";
        div.style.display = "none";
    } else {
        header.style.marginBottom = "20%";
        div.style.display = "block";
    }

    expanded = !expanded;
}

window.addEventListener("resize", () => {
    let div = document.getElementById('navCollapse');

    if (window.innerWidth > 991) {
        div.style.display = "flex";
    } else {
        expanded = true;
        Expand();
    }
})

document.addEventListener("DOMContentLoaded", () => {
    var background = document.getElementsByClassName('background')[0];
    var shark = background.children[0];

    for (var i = 0; i < 200; i++) {
        var div = document.createElement('div');
        div.classList.add('bubble');
        background.insertBefore(div, shark);
    }
})