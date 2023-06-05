function audio_control() {
    var audio = document.getElementById("game-audio");
    audio.volume = 0.5;
    audio.play();
}

function toggle_sites() {
    // Toggle visibility of the two pages using jQuery
    var titlePage = $("#title_page");
    var dressUpPage = $("#dress_up_page");
    titlePage.css("display", "none");
    dressUpPage.css("display", "block");
    audio_control();
}

function main() {
    //go from title to dress up screen
    $("#dress_up_page").css("display", "none");
    $("#start").click(toggle_sites);
}

main();