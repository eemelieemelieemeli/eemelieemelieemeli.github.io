function navigaatio() {
    var x = document.getElementById("navigaatio");
    var y = document.getElementById("icon");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.src = "nav1.svg";
    } else {
        x.style.display = "block";
        y.src = "nav2.svg";
    }
}