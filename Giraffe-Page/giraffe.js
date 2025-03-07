const img_body = document.getElementById("giraffe-body");
const img_head = document.getElementById("top-img");
const page_body = document.getElementById("body");

var max_height = 900;
var min_height = 300;
var body_height = 300;
var mouse_dragging = 0;
var old_pos = 0;
var new_pos = 0;

addEventListener("scroll", () => {
    var thing = body_height + (window.scrollY * 3);
    if (thing < min_height) {
        thing = min_height;
    } else if (thing > max_height) {
        thing = max_height;
    }
    img_head.style.height = thing + "px";
});