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
        accept: ".accessory",
        drop: (_, ui) => {
            //get id (including the hashtag) of accessory
            var dragged_item_id = "#" + ui.draggable.attr("id");
            console.log(dragged_item_id);

            //add accesory to doll body
            $(dragged_item_id).appendTo("#doll-container");
            $("#doll-container").css("position", "relative");
            var new_placement = "#doll-container" + dragged_item_id;
            $(new_placement).css("position", "absolute");

            //hide display of original position of element
            var original_placement = ".cushion" + dragged_item_id;
            $(original_placement).hide();
        }
    });
}

main();