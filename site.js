
function toggle_sites() {
    var title = document.getElementById("title_page");
    var dress_up = document.getElementById("dress_up_page");
    var show = title.style.display;
    console.log("This is show: ", title.style.display.toString());
    var hide = dress_up.style.display;
    title.style.display = hide;
    dress_up.style.display = show;
    
    /* Should we add music? */
}

function main() {
    var button = document.getElementById("start");
    button.addEventListener("click", toggle_sites);
}

main();
