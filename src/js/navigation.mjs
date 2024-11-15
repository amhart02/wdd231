function mainMenuNavigation(ev) {
    let target = ev.target;
    document.querySelector(".global-nav").classList.toggle("show");
    if (target.tagName != "BUTTON") {
    target = target.closest("button");
    }
    if (document.querySelector(".global-nav").classList.contains("show")) {
    target.setAttribute("aria-expanded", true);
    } else {
    target.setAttribute("aria-expanded", false);
    }
}

function subMenuNavigation(ev) {
    console.log("submenu enabled")
    ev.currentTarget.closest("li");
    ev.currentTarget.closest("li").querySelector(".global-nav__submenu").classList.toggle("show");
    ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
}

export function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    const submenuButtons = document.querySelectorAll(".global-nav__split-button__toggle");   

    menuButton.addEventListener("click", mainMenuNavigation)
    submenuButtons.forEach((button) => {
        button.addEventListener("click", subMenuNavigation);
    })
}