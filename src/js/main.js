import { getParkData , getInfoLinks } from "./parkService.mjs";
import { mediaTemplateCard} from "./templates.mjs";
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
