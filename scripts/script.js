let expanded = false;

function Expand() {
    let body = document.getElementsByTagName('BODY')[0];
    let header = body.children[0];
    let nav = header.children[0];
    let ol = nav.children[0];
    for (let i = 1; i < ol.children.length; i++) {
        if (expanded) {
            ol.children[i].style.display = "none";
        } else {
            ol.children[i].style.display = "block";
        }
    }
    expanded = !expanded;
}