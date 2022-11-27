setTimeout(() => {
    const hambugerMenu = document.getElementById("hambuger__menu");

    hambugerMenu.addEventListener("click", () => {
        if (hambugerMenu.classList.contains("active")) {
            document.querySelector("#aside").classList.remove("active");
            hambugerMenu.classList.remove("active");
        } else {
            document.querySelector("#aside").classList.add("active");
            hambugerMenu.classList.add("active");
        }
    });
}, 200);
