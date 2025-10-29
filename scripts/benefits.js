var pictures = document.querySelectorAll(".benefit");

pictures.forEach(picture => {
    picture.addEventListener("click", () => {
        var pic = picture.querySelector("img");
        var text = picture.querySelector("p");
        togglePicText(pic, text);
    })
});

function togglePicText(picture, text) {
    picture.classList.toggle("show-picture");
    picture.classList.toggle("hide-picture");

    text.classList.toggle("show-text");
    text.classList.toggle("hide-text");
}