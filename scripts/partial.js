var burger = document.querySelector(".brrgrr");
var page = document.querySelector(".page-container");


if (burger) {
    burger.addEventListener("click", () => {
        var navbar = document.querySelector(".nav-menu");
        var title = document.querySelector(".navbar-title-container")
        if (navbar) {
            toggleNavbar(navbar);
        }
        else {
            console.log("Didn't find navbar!");
        }

        if (title) {
            toggleNavbar(title)
        }
        else {
            console.log("Didn't find title for navbar!")
        }
    })
}
else {
    console.log("Didn't find burger!")
}

if (page) {
    page.addEventListener("click", () => {
        var navbar = document.querySelector(".nav-menu");
        if (navbar.classList.contains("show")) {
            toggleNavbar(navbar);
        }
    })
}
else {
    console.log("Didn't find page container!")
}


function toggleNavbar(navbar) {
    navbar.classList.toggle("show");
}

var dropdown = document.querySelector(".dropdown");

if (dropdown) {
    dropdown.addEventListener("click", () => {
        var content = dropdown.querySelector(".dropdown-content");
        toggleShow(content);
    })
}

function toggleShow(text) {
    text.classList.toggle("hide-content");
    text.classList.toggle("show-content");
}