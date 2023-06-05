function audio_control() {
    var aud = document.getElementById("game-audio");
    aud.volume = 0.5;
    aud.play();
}

function toggle_sites() {
    // Toggle visibility of the two pages using jQuery
    var titlePage = $("#title_page");
    var dressUpPage = $("#dress_up_page");
    titlePage.css("display", "none");
    dressUpPage.css("display", "block");

    //play audio
    audio_control();
}

function main() {
    //go from title to dress up screen
    $("#dress_up_page").css("display", "none");
    $("#start").click(toggle_sites);
}

main();