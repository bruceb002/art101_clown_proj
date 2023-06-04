function toggle_sites() {
    // Toggle visibility of the two pages using jQuery
    var titlePage = $("#title_page");
    var dressUpPage = $("#dress_up_page");
    titlePage.css("display", "none");
    dressUpPage.css("display", "block");

    /* Should we add music? */
}

function main() {
    //go from title to dress up screen
    $("#dress_up_page").css("display", "none");
    $("#start").click(toggle_sites);

    //handle drag and drop
    $(".accessory").draggable();
    $("#doll-container").droppable({
        drop: function() {
            alert("This basic function works!");
        }
    });
}

main();