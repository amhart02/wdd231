import { getParkData , getInfoLinks } from "./parkService.mjs";
import { mediaTemplateCard} from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();
const infoLinks = getInfoLinks();

function setIntroSection(data) {
    const intro = document.querySelector(".intro");
    intro.innerHTML = `<h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>`;
}

function setMediaCard(info) {
    const infoSection = document.querySelector(".info");
    const mediaCard = info.map(mediaTemplateCard);
    infoSection.innerHTML = mediaCard.join("");
}

setHeaderFooter(parkData);
setIntroSection(parkData);
setMediaCard(infoLinks);
