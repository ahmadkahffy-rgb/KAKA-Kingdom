function enterKingdom() {

    document.getElementById("king").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   IMAGE LIGHTBOX
========================= */

function openImage(image) {

    const lightbox = document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightbox-image");

    lightboxImage.src = image;

    lightbox.classList.add("active");

}


function closeImage() {

    const lightbox =
        document.getElementById("lightbox");

    lightbox.classList.remove("active");

}


/* =========================
   ESC TO CLOSE
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeImage();

    }

});