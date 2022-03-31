function dropdown(num) {
    var item = document.getElementById("items" + num);
    if (item.style.display === "none" || item.style.display === "") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}