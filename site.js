
function toggle_sites() {
    var title = document.getElementById("title_page");
    var dress_up = document.getElementById("dress_up_page");
    title.style.display = "none";
    dress_up.style.display = "block";
    
    /* Should we add music? */
}

function main() {
    var button = document.getElementById("start");
    button.addEventListener("click", toggle_sites);
}

main();
