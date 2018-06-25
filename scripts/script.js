/* ---------------------------------
Scripts for Jeffrey Kenney's Website
--------------------------------- */

/* -----------------
M86 H-alpha toggling
----------------- */
function toggleImage() {
    // Get top image and add/remove the hidden class
    document.getElementById("m86-top").classList.toggle("hidden")
}

/* ---------------
NGC 4921 modal box
--------------  */
// Open the Modal
function openModal(modalNum) {
    document.getElementById('modal' + modalNum).style.display = "block";
}
// Close the Modal
function closeModal(modalNum) {
    document.getElementById('modal' + modalNum).style.display = "none";
}
// Show current slide
function currentImg(n) {
    showImg(imgIndex = n);
}
function changeImg(n) {
    showImg(imgIndex += n);
}
// Show a slide
function showImg(n) {
    // Get the images
    var imgs = document.getElementsByClassName("modal-content")
    // Wrap (n)
    if (n > imgs.length) {imgIndex = 1 }
    if (n < 1) {imgIndex = imgs.length }
    // Remove image display
    for (i = 0; i < imgs.length; i++) { imgs[i].style.display = "none"; }
    // Display the image that was clicked
    imgs[imgIndex - 1].style.display = "block"
}