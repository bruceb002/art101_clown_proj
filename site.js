
function toggle_sites() {
    var title = document.getElementById("title_page");
    title.style.display = "none";
    /* Should we add music? */
}

function main() {
    var button = document.getElementById("start");
    button.addEventListener("click", toggle_sites);
}

main();
