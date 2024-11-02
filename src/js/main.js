import { getParkData , getInfoLinks } from "./parkService.mjs";
import { mediaTemplateCard } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";


function setIntroSection(data) {
    const intro = document.querySelector(".intro");
    intro.innerHTML = `<h1>${data.fullName}</h1>
    <p>${data.description}</p>`;
}

function setMediaCard(info) {
    const infoSection = document.querySelector(".info");
    const mediaCard = info.map(mediaTemplateCard);
    infoSection.innerHTML = mediaCard.join("");
}

async function init() {
    const parkData = await getParkData();
    const infoLinks = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setIntroSection(parkData);
    setMediaCard(infoLinks);
}

init();

function enableNavigation() {
    // use a querySelector to get the menu buttons
    const menuButton = document.querySelector("#global-nav-toggle");
    // when the main menu button is clicked:
    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;
      // toggle the show class on the global-nav
        document.querySelector(".global-nav").classList.toggle("show");
      // check to see if target is the button or something inside the button
        if (target.tagName != "BUTTON") {
            target = target.closest("button")
        }
      // check to see if we just opened or closed the menu
        if (document.querySelector(".global-nav").classList.contains("show")) {
            target.setAttribute("aria-expanded", true);
        } else {
            target.setAttribute("aria-expanded", false);
        }    
    });
}

enableNavigation();