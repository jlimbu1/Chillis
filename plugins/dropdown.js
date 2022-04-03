function dropdown(num) {
    var item = document.getElementById("items" + num);
    var dropdowns = document.getElementsByClassName("dropdown-items");
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns.item(i).id === item.id) {
            display_toggle(dropdowns.item(i));
        }else {
            dropdowns.item(i).style.display = "none";
        }
    }
}

function display_toggle(item) {
    if (item.style.display === "none" || item.style.display === "") {
        item.style.display = "block";
        item.style.animationName = "slide-in-out"
    } else {
        item.style.display = "none";
    }
}