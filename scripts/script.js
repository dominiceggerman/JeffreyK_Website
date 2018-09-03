/* ---------------------------------
Scripts for Jeffrey Kenney's Website
--------------------------------- */

/* -----------------
M86 H-alpha toggling
----------------- */
function toggleImage(imgNum) {
    // Get top images and add/remove the hidden class from the clicked one
    var imgs = document.getElementsByClassName("top-img")
    imgs[imgNum].classList.toggle("hidden");
}

/* --------------
Project slideshow
-------------- */
// Change slide
var slideIndexes = [1, 1, 1, 1, 1, 1];
// Show slide
function changeSlide(n, projNum) {
    var slides = document.getElementsByClassName("scroll-item-image-" + projNum)
    var changeTo = slideIndexes[projNum] + n
    // Wrap
    if (changeTo > slides.length) { changeTo = 1; }
    if (changeTo < 1) { changeTo = slides.length; }
    for (var i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slides[changeTo-1].style.display = "block";
    slideIndexes[projNum] = changeTo;
}
/* ----------------
Project modal boxes
---------------- */
// Open the Modal
function openModal(modalNum) {
    document.getElementById('modal-' + modalNum).style.display = "block";
}
// Close the Modal
function closeModal(modalNum) {
    document.getElementById('modal-' + modalNum).style.display = "none";
}
// Show current slide
function currentImg(n, modalNum) {
    showImg(imgIndex = n, modalNum);
}
function changeImg(n, modalNum) {
    showImg(imgIndex += n, modalNum);
}
// Show a slide
function showImg(n, modalNum) {
    // Get the images
    var imgs = document.getElementsByClassName("modal-content-" + modalNum);
    // var desc = document.getElementsByClassName("modal-text-" + modalNum);
    // Wrap (n)
    if (n > imgs.length) { imgIndex = 1; }
    if (n < 1) { imgIndex = imgs.length; }
    // Remove image display
    for (i = 0; i < imgs.length; i++) { 
        imgs[i].style.display = "none";
        // desc[i].style.display = "none";
    }
    // Display the image that was clicked
    imgs[imgIndex - 1].style.display = "block";
    // desc[imgIndex - 1].style.display = "block";
}