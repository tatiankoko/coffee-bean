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

let showCategory = (index) => {
    productsBoxes.forEach((productBox, i) => {
        if (i === index) {
            productBox.classList.remove("product-box_hidden")
        } else {
            productBox.classList.add("product-box_hidden")
        }
    })
}
