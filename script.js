const categoryButtons =
    document.querySelectorAll(".menu__button");

const productsBoxes =
    document.querySelectorAll(".product-box");

if (categoryButtons.length > 0 && productsBoxes.length > 0) {
    categoryButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showCategory(index)
        })
    })
}

const showCategory = (index) => {
    productsBoxes.forEach((productBox, i) => {
        if (i === index) {
            productBox.classList.add("product-box_visible")
        } else {
            productBox.classList.remove("product-box_visible")
        }
    })
}

const hamburgerMenuEl = document.querySelector(".hamburger-menu");
const navEl = document.querySelector(".nav-links");

if (hamburgerMenuEl && navEl) {
    hamburgerMenuEl.addEventListener("change", () => {
        navEl.classList.toggle("show-menu");
    });

    // hamburgerMenuEl.addEventListener("blur", (blur) => {
    //     //if (blur) {
    //         hamburgerMenuEl.checked = false;
    //     //}
    // })
}

let changeCheckBox = () => {
    document.getElementById("hamburger-checkbox").checked = false;
    navEl.classList.toggle("show-menu");
}
