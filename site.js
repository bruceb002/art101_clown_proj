function toggle_sites() {
    // Toggle visibility of the two pages using jQuery
    var titlePage = $("#title_page");
    var dressUpPage = $("#dress_up_page");
    titlePage.css("display", "none");
    dressUpPage.css("display", "block");

    /* Should we add music? */
}

let draggedAccessory = null;

function dragStart(event) {
  draggedAccessory = this;
  this.classList.add('dragging');
  event.dataTransfer.setData('text/plain', event.target.id);
}

function dragEnd() {
  this.classList.remove('dragging');
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop(event) {
  this.classList.remove('hovered');
  const droppedAccessory = document.getElementById(event.dataTransfer.getData('text/plain'));
  
  if (this.contains(droppedAccessory)) {
    // Accessory is being dropped back to its original position
    this.appendChild(droppedAccessory);
  } else {
    // Accessory is being dropped onto the clown container
    const clonedAccessory = droppedAccessory.cloneNode(true);
    this.appendChild(clonedAccessory);
  }
}

function main() {
    $("#dress_up_page").css("display", "none");
    var button = document.getElementById("start");
    button.addEventListener("click", toggle_sites);

    const accessories = document.querySelectorAll('.cushion1');
    const clownContainer = document.getElementById('doll-container');

    accessories.forEach(accessory => {
      accessory.addEventListener('dragstart', dragStart);
      accessory.addEventListener('dragend', dragEnd);
    });

    clownContainer.addEventListener('dragover', dragOver);
    clownContainer.addEventListener('dragenter', dragEnter);
    clownContainer.addEventListener('dragleave', dragLeave);
    clownContainer.addEventListener('drop', drop);
}

main();